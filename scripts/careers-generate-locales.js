#!/usr/bin/env node
/*
  Script for updating static Careers locales from Google Spreadsheet
  Usage: node scripts/careers-generate-locales.js
  Then commit the changed files.

  The used dependencies (node-fetch and lodash) aren't explicitly added to package.json since we just assume that someone in the dependency tree has them.
  If you run into issues with dependencies, try a one-off install (`npm i --no-save node-fetch lodash`) or just add them to devDependencies.

  Depends on the third party service (https://gsx2json.com/) to generate JSON from the spreadsheet published to web.
 */
const { writeFile } = require('fs/promises');
const path = require('path');
const fetch = require('node-fetch');
const _ = require('lodash');

const SPREADHEET_KEY = '1CsPOEWq5WWGxQ3Ww_MLvwAtOVx-PJv_9h3N9oC0K9rA';
const SPREADSHEET_JSON = `https://gsx2json.com/api?id=${SPREADHEET_KEY}&columns=false`;
const OUTPUT_DIR = path.resolve(__dirname, '..', 'careers', 'locales');

async function getRows() {
  const data = await fetch(SPREADSHEET_JSON).then((res) => res.json());
  return data.rows;
}

function generateLocales(rows) {
  const locales = {
    en: {},
    fr: {}
  };

  for (const { key, en, fr } of rows) {
    _.set(locales.en, key, en);
    _.set(locales.fr, key, fr);
  }

  return locales;
}

function saveLocales(locales) {
  for (const [locale, content] of Object.entries(locales)) {
    const fname = path.join(OUTPUT_DIR, `${locale}.json`);
    writeFile(fname, JSON.stringify(content, null, 2));
  }
}

getRows().then(generateLocales).then(saveLocales);
