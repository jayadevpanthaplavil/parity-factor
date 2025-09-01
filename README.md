# 💸 parity-factor
## Purchasing Power Parity (PPP) Conversion Factor

[![View on npm](https://img.shields.io/badge/npm-parity--factor-red?logo=npm)](https://www.npmjs.com/package/parity-factor)
[![npm version](https://img.shields.io/npm/v/xparity-factor)](https://www.npmjs.com/package/parity-factor)
[![npm downloads](https://img.shields.io/npm/dm/parity-factor)](https://www.npmjs.com/package/parity-factor)

A lightweight Node.js package and CLI tool to fetch real-time **Purchasing Power Parity (PPP)** conversion factors (GDP-based, LCU per international $).  
Data is sourced from the **World Bank** and cached via **CDN + fallback JSON** for reliability.  

---

☕ _This package runs on caffeine. If it helped you, consider buying me a coffee._

<a href="https://www.buymeacoffee.com/jayadevpanthaplavil" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height:60px;width:auto;">
</a>

---

## ✨ Features

- Fetch PPP conversion factor by country ISO3 code.  
- Data refreshed **daily** via CDN
- Works both as **Node.js library** and **CLI tool**
- Simple, lightweight, no API key required 🚀
- Unlimited data fetches

---

## 📦 Installation

```bash
npm install parity-factor
```

Or with yarn:

```bash
yarn add parity-factor
```

---

## 🚀 Usage

### In Node.js

```js
import { getParity } from "ppp-conversion";

const value = await getParity("AFG");
console.log("PPP for Afghanistan:", value);
```

**Output:**

```json
{
  "last_updated": "2025-08-18",
  "data": [
    {
      "sourceid": "2",
      "indicator": {
        "id": "PA.NUS.PPP",
        "value": "PPP conversion factor, GDP (LCU per international $)"
      },
      "country": {
        "id": "AF",
        "value": "Afghanistan"
      },
      "countryiso3code": "AFG",
      "date": "2023",
      "value": 14.8009414284672,
      "unit": "",
      "obs_status": "",
      "decimal": 2
    }
  ]
}
```

---

### In CLI

```bash
npx parityfactor AFG
```

**Output:**

```json
{
  "sourceid": "2",
  "indicator": {
    "id": "PA.NUS.PPP",
    "value": "PPP conversion factor, GDP (LCU per international $)"
  },
  "country": {
    "id": "AF",
    "value": "Afghanistan"
  },
  "countryiso3code": "AFG",
  "date": "2023",
  "value": 14.8009414284672,
  "unit": "",
  "obs_status": "",
  "decimal": 2
}
```

---

## 🌍 Supported Countries


This package provides support for the following countries. Each entry contains the **ISO Alpha-3 country code** and the **country name**.

---

## 📌 Countries List

<details>
<summary>Click to expand</summary>

| Code | Country |
|------|---------|
| AFG  | Afghanistan |
| ALB  | Albania |
| DZA  | Algeria |
| AND  | Andorra |
| AGO  | Angola |
| ATG  | Antigua and Barbuda |
| ARG  | Argentina |
| ARM  | Armenia |
| ABW  | Aruba |
| AUS  | Australia |
| AUT  | Austria |
| AZE  | Azerbaijan |
| BHS  | Bahamas, The |
| BHR  | Bahrain |
| BGD  | Bangladesh |
| BRB  | Barbados |
| BLR  | Belarus |
| BEL  | Belgium |
| BLZ  | Belize |
| BEN  | Benin |
| BMU  | Bermuda |
| BTN  | Bhutan |
| BOL  | Bolivia |
| BIH  | Bosnia and Herzegovina |
| BWA  | Botswana |
| BRA  | Brazil |
| BRN  | Brunei Darussalam |
| BGR  | Bulgaria |
| BFA  | Burkina Faso |
| BDI  | Burundi |
| CPV  | Cabo Verde |
| KHM  | Cambodia |
| CMR  | Cameroon |
| CAN  | Canada |
| CAF  | Central African Republic |
| TCD  | Chad |
| CHL  | Chile |
| CHN  | China |
| COL  | Colombia |
| COM  | Comoros |
| COD  | Congo, Dem. Rep. |
| COG  | Congo, Rep. |
| CRI  | Costa Rica |
| CIV  | Cote d'Ivoire |
| HRV  | Croatia |
| CUW  | Curacao |
| CYP  | Cyprus |
| CZE  | Czechia |
| DNK  | Denmark |
| DJI  | Djibouti |
| DMA  | Dominica |
| DOM  | Dominican Republic |
| ECU  | Ecuador |
| EGY  | Egypt, Arab Rep. |
| SLV  | El Salvador |
| GNQ  | Equatorial Guinea |
| ERI  | Eritrea |
| EST  | Estonia |
| SWZ  | Eswatini |
| ETH  | Ethiopia |
| FJI  | Fiji |
| FIN  | Finland |
| FRA  | France |
| GAB  | Gabon |
| GMB  | Gambia, The |
| GEO  | Georgia |
| DEU  | Germany |
| GHA  | Ghana |
| GRC  | Greece |
| GRL  | Greenland |
| GRD  | Grenada |
| GTM  | Guatemala |
| GIN  | Guinea |
| GNB  | Guinea-Bissau |
| GUY  | Guyana |
| HTI  | Haiti |
| HND  | Honduras |
| HKG  | Hong Kong SAR, China |
| HUN  | Hungary |
| ISL  | Iceland |
| IND  | India |
| IDN  | Indonesia |
| IRN  | Iran, Islamic Rep. |
| IRQ  | Iraq |
| IRL  | Ireland |
| ISR  | Israel |
| ITA  | Italy |
| JAM  | Jamaica |
| JPN  | Japan |
| JOR  | Jordan |
| KAZ  | Kazakhstan |
| KEN  | Kenya |
| KIR  | Kiribati |
| KOR  | Korea, Rep. |
| XKX  | Kosovo |
| KWT  | Kuwait |
| KGZ  | Kyrgyz Republic |
| LAO  | Lao PDR |
| LVA  | Latvia |
| LBN  | Lebanon |
| LSO  | Lesotho |
| LBR  | Liberia |
| LBY  | Libya |
| LTU  | Lithuania |
| LUX  | Luxembourg |
| MAC  | Macao SAR, China |
| MDG  | Madagascar |
| MWI  | Malawi |
| MYS  | Malaysia |
| MDV  | Maldives |
| MLI  | Mali |
| MLT  | Malta |
| MHL  | Marshall Islands |
| MRT  | Mauritania |
| MUS  | Mauritius |
| MEX  | Mexico |
| FSM  | Micronesia, Fed. Sts. |
| MDA  | Moldova |
| MNG  | Mongolia |
| MNE  | Montenegro |
| MAR  | Morocco |
| MOZ  | Mozambique |
| MMR  | Myanmar |
| NAM  | Namibia |
| NRU  | Nauru |
| NPL  | Nepal |
| NLD  | Netherlands |
| NZL  | New Zealand |
| NIC  | Nicaragua |
| NER  | Niger |
| NGA  | Nigeria |
| MKD  | North Macedonia |
| NOR  | Norway |
| OMN  | Oman |
| PAK  | Pakistan |
| PLW  | Palau |
| PAN  | Panama |
| PNG  | Papua New Guinea |
| PRY  | Paraguay |
| PER  | Peru |
| PHL  | Philippines |
| POL  | Poland |
| PRT  | Portugal |
| PRI  | Puerto Rico (US) |
| QAT  | Qatar |
| ROU  | Romania |
| RUS  | Russian Federation |
| RWA  | Rwanda |
| WSM  | Samoa |
| STP  | Sao Tome and Principe |
| SAU  | Saudi Arabia |
| SEN  | Senegal |
| SRB  | Serbia |
| SYC  | Seychelles |
| SLE  | Sierra Leone |
| SGP  | Singapore |
| SVK  | Slovak Republic |
| SVN  | Slovenia |
| SLB  | Solomon Islands |
| SOM  | Somalia |
| ZAF  | South Africa |
| ESP  | Spain |
| LKA  | Sri Lanka |
| KNA  | St. Kitts and Nevis |
| LCA  | St. Lucia |
| VCT  | St. Vincent and the Grenadines |
| SDN  | Sudan |
| SUR  | Suriname |
| SWE  | Sweden |
| CHE  | Switzerland |
| SYR  | Syrian Arab Republic |
| TJK  | Tajikistan |
| TZA  | Tanzania |
| THA  | Thailand |
| TLS  | Timor-Leste |
| TGO  | Togo |
| TON  | Tonga |
| TTO  | Trinidad and Tobago |
| TUN  | Tunisia |
| TUR  | Turkiye |
| TKM  | Turkmenistan |
| TCA  | Turks and Caicos Islands |
| TUV  | Tuvalu |
| UGA  | Uganda |
| UKR  | Ukraine |
| ARE  | United Arab Emirates |
| GBR  | United Kingdom |
| USA  | United States |
| URY  | Uruguay |
| UZB  | Uzbekistan |
| VUT  | Vanuatu |
| VNM  | Viet Nam |
| PSE  | West Bank and Gaza |
| YEM  | Yemen, Rep. |
| ZMB  | Zambia |
| ZWE  | Zimbabwe |

</details>

---

✅ Total Supported Countries: **191**

---

## 🔗 Data Source

All parity conversion factors are updated monthly and served from CDN:  
👉 [https://cdn.jsdelivr.net/npm/parity-factor@latest/v1/parity.json](https://cdn.jsdelivr.net/npm/parity-factor@latest/v1/parity.json)

---

## 📜 License

[ISC](./LICENSE) – © Jayadev Panthaplavil
