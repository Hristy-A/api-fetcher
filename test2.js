const _ = require('lodash');

function genPosField() {
  const field = [];
  for (let i = 0; i < 5; i++) {
    field.push([]);
    for (let j = 0; j < 5; j++) {
      field[i].push({ i, j });
    }
  }
  return _.flatMapDepth(field);
}

const firstMove = Math.round(Math.random()) ? 'blue' : 'red';
let blueCardsCount;
let redCardsCount;
if (firstMove === 'blue') {
  blueCardsCount = 9;
  redCardsCount = 8;
} else {
  blueCardsCount = 8;
  redCardsCount = 9;
}

const red = [];
const blue = [];

const positions = genPosField();
for (let i = 0; i < 17; i++) {
  if (firstMove === 'blue') {
    if (i % 2 === 0) {
      blue.push(positions.splice(Math.floor(Math.random() * positions.length), 1)[0]);
    } else {
      red.push(positions.splice(Math.floor(Math.random() * positions.length), 1)[0]);
    }
  } else if (i % 2 === 0) {
    red.push(positions.splice(Math.floor(Math.random() * positions.length), 1)[0]);
  } else {
    blue.push(positions.splice(Math.floor(Math.random() * positions.length), 1)[0]);
  }
}

console.log(firstMove);
console.log(red);
console.log(red.length);
console.log(blue);
console.log(blue.length);
