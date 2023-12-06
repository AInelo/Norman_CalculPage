const fs = require('fs');
const cheerio = require('cheerio');

// Charger le contenu du fichier HTML
const htmlContent = fs.readFileSync('index.html', 'utf8');

// Utiliser Cheerio pour analyser le HTML
const $ = cheerio.load(htmlContent);

// Trouver toutes les occurrences de liens correspondant au motif spécifié
const pattern = /https:\/\/www\.demenageur\.com\/wp-content\/uploads\/2020\/03\/[^"]+/g;
const matches = htmlContent.match(pattern);

// Créer le contenu du fichier Bash
const bashScriptContent = matches
    .map(link => `wget "${link}" -O "$(basename "${link}")"`)
    .join('\n');

// Écrire le contenu dans le fichier Bash
fs.writeFileSync('script.sh', bashScriptContent, 'utf8');

console.log('Script généré avec succès dans le fichier script.sh');
