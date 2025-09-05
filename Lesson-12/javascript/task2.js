"use strict";
/**
 * Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
 */
const array = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
document.write(`<h2>Base Array</h2>`);
printTableNum(array);
let leftIndex = 0;
let rightIndex = array.length - 1;
let swapValue = 0;
while (leftIndex < rightIndex) {
    let changed = false;
    for (let i = leftIndex + 1; i <= rightIndex; i++) {
        if (array[i - 1] > array[i]) {
            let temp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = temp;
            changed = true;
            swapValue++;
            printTableNum(array, `Swap at forward pass (i=${i})`);
        }
    }
    rightIndex--;
    if (!changed)
        break;
    changed = false;
    for (let i = rightIndex; i > leftIndex; i--) {
        if (array[i - 1] > array[i]) {
            let temp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = temp;
            changed = true;
            swapValue++;
            printTableNum(array, `Swap at backward pass (i=${i})`);
        }
    }
    leftIndex++;
    if (!changed)
        break;
}
document.write(`<h2>Sorted Array</h2>`);
printTableNum(array);
document.write(`<h2>Total swaps during cocktail sort = ${swapValue}</h2>`);
function printTableNum(arr, label = "") {
    if (label)
        document.write(`<p><b>${label}</b></p>`);
    document.write(`<table border="1" cellspacing="0" cellpadding="5" style="margin-bottom:5px"><tr>`);
    arr.forEach(num => document.write(`<td>${num}</td>`));
    document.write(`</tr></table>`);
}
