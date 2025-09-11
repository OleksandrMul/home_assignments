/**
    Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
 */

if (confirm('Почати тестування?')) {
    /**
     * Prints a value to the document with a custom message.
     * @param {any} value - The value that will be printed.
     * @param {string} msg - A message to display before the value.
     * @returns {void} This function does not return anything.
     */
    function printValueMsg(value: any, msg: string): void {
        document.write(`<h2>${msg} = ${value}</h2>`)
    }

    /**
     * Calculates the year after a given number of months from a specific date.
     * @param {DateObject} object - An object representing a date with day, month, and year.
     * @param {number} N - The number of months to add to the current date.
     * @returns {number} The year after adding N months to the given date.
     */
    function getYearInNMonths(object: DateObject, N: number): number {
        return object.year + (Math.floor((object.month + N - 1) / 12))
    }

    type DateObject = {
        day: number,
        month: number,
        year: number
    }

    const userDate: DateObject = {
        day: 10,
        month: 9,
        year: 2025
    }

    const numberMonths: number = parseInt(prompt('Enter the number of months:') ?? '0')
    if (isFinite(numberMonths)) {

        const yearAfterNMonths: number = getYearInNMonths(userDate, numberMonths)
        printValueMsg(yearAfterNMonths, `After ${numberMonths} months it will be year`)
    } else {
        throw new Error("Error: Please enter correct number!");
    }
}