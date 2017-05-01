// Use the filesystem to read and parse the json file 'array.json' and log it the console.
const fs = require('fs');
const path = require('path');

const pathname = path.join(__dirname, 'array.json');
const encoding = 'utf-8';

const arrayString = fs.readFileSync(pathname, encoding);
const array = JSON.parse(arrayString);

console.log('Array from file:', array);
