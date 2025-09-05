"use strict";
/***
 * Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
 * Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
 */
const MIN_DAY = 1;
const MAX_DAY = 7;
function getRandomNumber(minV, maxV) {
    return minV + Math.floor(Math.random() * (maxV - minV + 1));
}
function getRandomArray(arrLength, minV, maxV) {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        const randNum = getRandomNumber(minV, maxV);
        arr.push(randNum);
    }
    return arr;
}
function getRandomTable(rowsNumber, colsNumber, minV, maxV) {
    let table = [];
    for (let rowNumber = 0; rowNumber < rowsNumber; rowNumber++) {
        const randRow = getRandomArray(colsNumber, minV, maxV);
        table.push(randRow);
    }
    return table;
}
const table = getRandomTable(4, 8, MIN_DAY, MAX_DAY);
console.log(table);
const numberSundays = table.map((row) => row.reduce((counter, day) => day === 7 ? counter += 1 : counter, 0));
console.log(`${numberSundays}`);
document.write(`<h2>Number of Sundays for each row = ${numberSundays}</h2>`);
