const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8');

const splitted = data.split("\n")
let numberSafe = 0;

for (let i = 0; i < splitted.length; i++) {
    let report = splitted[i].split(" ")

    for (let i = 1; i < report.length - 1; i++) {
        let current = parseInt(report[i]);
        let next = parseInt(report[i + 1]);
        let prev = parseInt(report[i - 1]);

        console.log(`current: ${current}, prev: ${prev}, next: ${next}`)

        if (current <= prev || Math.abs(current - prev) < 1 || Math.abs(current - prev) > 3 || Math.abs(current - next) > 3 || Math.abs(current - next) < 1) {
            break;
        }
        numberSafe++;
    }


}

console.log(numberSafe)