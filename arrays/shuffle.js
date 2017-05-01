const fs = require('fs');
const path = require('path');
// Require underscore
const _ = require('underscore');

const pathname = path.join(__dirname, 'array.json');
const encoding = 'utf-8';

// Read array from file
let arrayString = fs.readFileSync(pathname, encoding);
const array = JSON.parse(arrayString);

// Use Underscore to shuffle the array
// Your code here
const shuffledArray = _.shuffle(array);

// Write shuffled array to file
arrayString = JSON.stringify(shuffledArray);
fs.writeFileSync(pathname, arrayString);

console.log('File saved.');
