#!/usr/bin/env node

import { getParity } from "../index.js";

const code = process.argv[2];
if (!code) {
    console.error(" Please provide a currency code. Example: npx partityfactor INR");
    process.exit(1);
}

getParity(code)
    .then((obj) => {
        console.log(JSON.stringify(obj, null, 2));
    })
    .catch((err) => {
        console.error("Error:", err.message);
        process.exit(1);
    });
