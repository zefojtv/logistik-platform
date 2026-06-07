import { readFileSync } from 'node:fs';

const requiredFiles = ['index.html', 'src/styles.css', 'src/app.js'];
const requiredPhrases = [
  'Opret tilbud',
  'Flådestyring',
  'Værkstedsportal',
  'Sikkerhed først',
  'Administrator &amp; support',
];

for (const file of requiredFiles) {
  readFileSync(file, 'utf8');
}

const html = readFileSync('index.html', 'utf8');
for (const phrase of requiredPhrases) {
  if (!html.includes(phrase)) {
    throw new Error(`Mangler forventet tekst i index.html: ${phrase}`);
  }
}

console.log('Static site validation passed.');
