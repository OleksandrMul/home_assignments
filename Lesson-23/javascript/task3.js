"use strict";
/** 
 * Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
 */

function createElByTagName(tagName) {
    const el = document.createElement(tagName)
    return el
}

function generateRandomNumber(min, max) {
    return (min + Math.floor(Math.random() * (max - min + 1)))
}

function* randomGenerateEvenNumbers(quantity, min = 0, max = 100) {

    let count = 0
    while (count < quantity) {

        let num = generateRandomNumber(min, max)
        if (num % 2 !== 0) num++

        count++;
        yield num
    }
}

window.onload = function () {

    const quantityEvenNumbers = 10
    const cnt = document.querySelector('.page')

    if (cnt) {

        for (const num of randomGenerateEvenNumbers(quantityEvenNumbers)) {

            const el = createElByTagName('div')
            el.textContent = num

            cnt.append(el)
        }
    }
}