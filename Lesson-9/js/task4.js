'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    const arrayOfItems = [100, 101, 1000, 1500, 10, 50, 22, 122, 30]

    if (arrayOfItems.length > 0) {

        for (const item of arrayOfItems) {

            if (item > 100) printValue(item, 'Value of item')
        }
    } else {
        throw new Error("Error: Array of items is empty!");
    }
}