// 1. Use the filesystem to save a JSON file with the given array to 'array.json'
// 2. Log 'File saved.' to the console
const fs = require('fs');
const path = require('path');

const array = [1, 2, 3, 4, 5];

const arrayString = JSON.stringify(array);

fs.writeFileSync(path.join(__dirname, 'array.json'), arrayString);

console.log('File saved.');
