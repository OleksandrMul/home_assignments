"use strict";
/**
 * Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
 */
const arrayNumbers = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
document.write(`<h2>Base Array</h2>`);
printTable(arrayNumbers);
let swapVal = 0;
for (let k = 1; k < arrayNumbers.length; k++) {
    const currentElement = arrayNumbers[k];
    let i = k - 1;
    document.write(`<h3>Step ${k}: Insert ${currentElement}</h3>`);
    while (i >= 0 && arrayNumbers[i] > currentElement) {
        arrayNumbers[i + 1] = arrayNumbers[i];
        i = i - 1;
        swapVal += 1;
        printTable(arrayNumbers, "shift");
    }
    arrayNumbers[i + 1] = currentElement;
    printTable(arrayNumbers, "after insert");
}
document.write(`<h2>Sorted Array</h2>`);
printTable(arrayNumbers);
document.write(`<h2>Total shifts during insertion sort = ${swapVal}</h2>`);
function printTable(arr, label = "") {
    document.write(`<table border="1" cellspacing="0" cellpadding="5" style="margin-bottom:5px">`);
    document.write(`<tr>${arr.map(n => `<td>${n}</td>`).join("")}</tr>`);
    document.write(`</table>`);
    if (label)
        document.write(`<p><i>${label}</i></p>`);
}
