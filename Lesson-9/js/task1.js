'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    const VALUE_TO_FILL = 0
    const numberOfItems = parseInt(prompt('Enter the number of items: ', 5)) || 5

    if (numberOfItems > 0) {

        const newArray = new Array(numberOfItems).fill(VALUE_TO_FILL)
        printValue(newArray, 'Value from new array')

    } else {
        throw new Error("Error: Please enter correct positive number!");
    }
}