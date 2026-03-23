<div align="center">

<img src="https://lightyearfrontier.com/wp-content/uploads/2023/12/Banner_Image.webp" alt="Lightyear Frontier" width="100%">

<br/>
<br/>

<img src="https://lightyearfrontier.com/wp-content/uploads/2022/06/GameLogo.png" alt="Lightyear Frontier Logo" width="340">

# Plant & Soil Guide

**Which soil produces normal yield, high yield, or mutations?**
An interactive reference for every crop in the game — with DE/EN language toggle.

<br/>

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-4ade80?style=for-the-badge&logo=github)](https://roomiiaan.github.io/lightyear-frontier-plant-guide/)
[![CI](https://img.shields.io/github/actions/workflow/status/Roomiiaan/lightyear-frontier-plant-guide/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white)](https://github.com/Roomiiaan/lightyear-frontier-plant-guide/actions)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## Overview

Every crop in Lightyear Frontier reacts differently depending on which soil type it's planted in. This guide gives you a quick visual overview of all plants and their soil interactions — normal yield, high yield (2×), or mutation (3 seeds).

## Features

- **All 8 crops** with their soil interaction results at a glance
- **Filter by soil type** — Nitrogenic, Phosphoric, Potassic
- **Crop rotation tips** for maximizing seeds or yield
- **DE / EN language toggle** — switch instantly, no reload
- **OOP JavaScript** — `LanguageManager`, `PlantFilter`, `PlantGuide` classes
- **External locale files** — translations live in `locales/de.json` and `locales/en.json`
- **CI checks** on every PR — JSON validation, JS syntax, HTML linting

## Soil × Crop Matrix

| Crop | Type | Normal | High Yield ✦ | Mutated ✦✦ |
|---|---|---|---|---|
| Gumberry | Potassic | Potassic | Nitrogenic | Phosphoric |
| Carrozel | Potassic | Potassic | Nitrogenic | Phosphoric |
| Honey Flask | Potassic | Potassic | Nitrogenic | Phosphoric |
| Glowbloom | Phosphoric | Phosphoric | Potassic | Nitrogenic |
| Rawhead | Phosphoric | Phosphoric | Potassic | Nitrogenic |
| Chromaize | Nitrogenic | Nitrogenic | Phosphoric | Potassic |
| Wheat | Nitrogenic | Nitrogenic | Phosphoric | Potassic |
| Zappling | Nitrogenic | Nitrogenic | Phosphoric | Potassic |

> **Mutated plants** yield 3 seeds from the Seed Extractor instead of 2, but cannot be processed into oil.

## Project Structure

```
lightyear-frontier-plant-guide/
├── index.html                  # Markup only — no inline JS or CSS
├── style.css                   # All styles
├── app.js                      # LanguageManager · PlantFilter · PlantGuide
├── locales/
│   ├── de.json                 # German translations
│   └── en.json                 # English translations
└── .github/
    └── workflows/
        └── ci.yml              # Validation pipeline
```

## Running Locally

The app uses `fetch()` to load locale files, so it requires a local server — opening `index.html` directly via `file://` won't work.

**Option 1 — VS Code Live Server**
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `index.html` → *Open with Live Server*.

**Option 2 — Node http-server**
```bash
npx http-server .
```

**Option 3 — Python**
```bash
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## CI Pipeline

Every pull request into `main` runs three checks automatically:

| Check | Tool | What it validates |
|---|---|---|
| Validate JSON | Node.js | `locales/*.json` are parseable |
| Check JS syntax | `node --check` | `app.js` has no syntax errors |
| Lint HTML | HTMLHint | `index.html` structure and attributes |

Merging into `main` is blocked until all checks pass.

---

<div align="center">

*Data based on community guides & the Lightyear Frontier Wiki*
*Fan project — not affiliated with Frame Break or Amplifier Game Invest*

</div>