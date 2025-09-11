"use strict";
/**
    Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
 */
var _a;
if (confirm('Почати тестування?')) {
    /**
     * Prints a value to the document with a custom message.
     * @param {any} value - The value that will be printed.
     * @param {string} msg - A message to display before the value.
     * @returns {void} This function does not return anything.
     */
    function printValueMsg(value, msg) {
        document.write(`<h2>${msg} = ${value}</h2>`);
    }
    /**
     * Calculates the year after a given number of months from a specific date.
     * @param {DateObject} object - An object representing a date with day, month, and year.
     * @param {number} N - The number of months to add to the current date.
     * @returns {number} The year after adding N months to the given date.
     */
    function getYearInNMonths(object, N) {
        return object.year + (Math.floor((object.month + N - 1) / 12));
    }
    const userDate = {
        day: 10,
        month: 9,
        year: 2025
    };
    const numberMonths = parseInt((_a = prompt('Enter the number of months:')) !== null && _a !== void 0 ? _a : '0');
    if (isFinite(numberMonths)) {
        const yearAfterNMonths = getYearInNMonths(userDate, numberMonths);
        printValueMsg(yearAfterNMonths, `After ${numberMonths} months it will be year`);
    }
    else {
        throw new Error("Error: Please enter correct number!");
    }
}
