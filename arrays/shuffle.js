const fs = require('fs');
const path = require('path');
// Install and save underscore, then require it here

const pathname = path.join(__dirname, 'array.json');

// Read array from file
let arrayString = fs.readFileSync(pathname, 'utf-8');
const array = JSON.parse(arrayString);

// Use Underscore to shuffle the array
const shuffledArray = /* Your Code here*/

// Write shuffled array to file
arrayString = JSON.stringify(shuffledArray);
fs.writeFileSync(pathname, arrayString);

console.log('File saved.');
