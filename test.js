const fs = require('fs');
const path = require('path');

const wordsLibraryRaw = fs.readFileSync(path.resolve('words.txt'), 'utf8');
const wordsLibrary = JSON.parse(wordsLibraryRaw);

console.time('start');
const resultDict = [];
const justCopy = wordsLibrary.slice();
for (let i = 0; i < 25; i++) {
  resultDict.push(justCopy.splice(Math.floor(Math.random() * justCopy.length), 1)[0]);
}

const groups = [];
for (let i = 0; i < 5; i++) {
  groups.push(resultDict.splice(0, 5));
}
console.timeEnd('start');

// console.log(JSON.stringify(resultDict));
// console.log(resultDict.length);
// console.log(JSON.stringify(groups));
