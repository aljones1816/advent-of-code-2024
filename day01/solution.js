
// part 1

const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8');

const splitted = data.split("\n")

const leftList = [];
const rightList = [];

splitted.forEach((value, i) => {
    new_value = value.split("   ")
    leftList.push(parseInt(new_value[0]))
    rightList.push(parseInt(new_value[1]))
})


let distance = 0;
for (let i = 0; i < leftList.length; i++) {

    distance += (Math.abs(leftList.sort()[i] - rightList.sort()[i]))
}

console.log(distance)

// part 2
const rightListHash = new Map();

for (let i = 0; i < rightList.length; i++) {
    const hashVal = rightListHash.get(rightList[i]);
    if (hashVal) {
        rightListHash.set(rightList[i], hashVal + 1)
    } else {
        rightListHash.set(rightList[i], 1)
    }
}

let multiplelength = 0;
for (let i = 0; i < leftList.length; i++) {
    const hashVal = rightListHash.get(leftList[i])
    if (hashVal) {
        multiplelength += leftList[i] * hashVal;
    }
}

console.log(multiplelength)