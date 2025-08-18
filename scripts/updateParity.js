import fetch from "node-fetch";
import { config } from "dotenv";
import { format } from "date-fns";
import fs from "fs";

config(); // load .env

const API_BASE = process.env.API_BASE;
const API_SUFFIX = process.env.API_SUFFIX;
const countries = JSON.parse(fs.readFileSync("./v1/countries.json", "utf-8"));


function buildUrl(code) {
    return `${API_BASE}/${code}/${API_SUFFIX}`;
}

async function fetchLatestPPP(code) {
    const url = buildUrl(code);
    const res = await fetch(url);
    if (!res.ok) {
        console.error(`Failed to fetch ${code}: ${res.status}`);
        return null;
    }

    const data = await res.json();
    if (!data || !Array.isArray(data) || !data[1]) {
        console.warn(`No data for ${code}`);
        return null;
    }

    // get the most recent entry with a non-null value
    const latest = data[1].find(entry => entry.value !== null);
    if (!latest) return null;

    return {
        sourceid: data[0]?.sourceid || "unknown",
        indicator: latest.indicator,
        country: latest.country,
        countryiso3code: latest.countryiso3code,
        date: latest.date,
        value: latest.value,
        unit: latest.unit,
        obs_status: latest.obs_status,
        decimal: latest.decimal
    };
}

async function updateParity() {
    const results = [];

    for (const c of countries) {
        const entry = await fetchLatestPPP(c.code);
        if (entry) results.push(entry);
    }

    const output = {
        last_updated: format(new Date(), "yyyy-MM-dd"),
        data: results
    };

    fs.writeFileSync("./v1/parity.json", JSON.stringify(output, null, 2));
    console.log("✅ parity.json updated with", results.length, "countries");
}

updateParity();
