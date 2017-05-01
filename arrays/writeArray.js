// 1. Use the filesystem to save a JSON file with the given array to 'array.json'
// 2. Log 'File saved.' to the console
const fs = require('fs');
const path = require('path');

const pathname = path.join(__dirname, 'array.json');

const array = [1, 2, 3, 4, 5];

// Your code here
fs.writeFileSync(pathname, JSON.stringify(array));

console.log('File saved');
