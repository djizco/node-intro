// Use the filesystem to read and parse the json file 'array.json' and log it the console.
const fs = require('fs');
const path = require('path');

const arrayString = fs.readFileSync(path.join(__dirname, 'array.json'), 'utf-8');
const array = JSON.parse(arrayString);

console.log('Array from file:', array);
