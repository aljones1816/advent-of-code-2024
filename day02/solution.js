const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8');

const splitted = data.split("\n")
let numberSafe = 0;

for (let i = 0; i < splitted.length; i++) {
    let report = splitted[i].split(" ")
    let unsafeCheck = false;
    let descCheck = true;
    let incCheck = true;


    for (let i = 1; i < report.length - 1; i++) {
        let current = parseInt(report[i]);
        let next = parseInt(report[i + 1]);
        let prev = parseInt(report[i - 1]);



        if (Math.abs(current) > Math.abs(next)) {
            incCheck = false;
        }

        if (Math.abs(current) < Math.abs(next)) {
            descCheck = false;
        }

        if (Math.abs(current - prev) < 1 || Math.abs(current - prev) > 3 || Math.abs(current - next) > 3 || Math.abs(current - next) < 1) {

            unsafeCheck = true;
        } else {

        }
    }


    if (!descCheck && !incCheck) unsafeCheck = true;
    if (!unsafeCheck) {
        console.log(report)
        numberSafe++
    };




}

console.log(numberSafe)