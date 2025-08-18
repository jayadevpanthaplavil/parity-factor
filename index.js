import fetch from "node-fetch";
import fs from "fs";
import path from "path";

const CDN_URL = "https://cdn.jsdelivr.net/npm/parity-factor@latest/v1/parity.json";
const localPath = path.resolve('./v1/parity.json');

/**
 * Fetch parity data by code
 * @param {string} code - Currency code (e.g., "INR")
 * @returns {Promise<Object>} - Parity object
 */

export async function getParity(code) {
    try {
        // 1. Try from CDN
        const res = await fetch(CDN_URL);
        if (!res.ok) throw new Error("CDN fetch failed");
        const json = await res.json();

        const found = json.data.find(item => item.countryiso3code === code.toUpperCase());
        if (found) return found;

        throw new Error(`Code ${code} not found in CDN`);
    } catch (err) {
        // 2. Fallback to local JSON
        try {
            const raw = fs.readFileSync(localPath, "utf-8");
            const json = JSON.parse(raw);

            const found = json.data.find(item => item.countryiso3code === code.toUpperCase());
            if (found) return found;

            throw new Error(`Code ${code} not found in local file`);
        } catch (localErr) {
            throw new Error(`Failed to fetch parity: ${err.message}, ${localErr.message}`);
        }
    }
}

