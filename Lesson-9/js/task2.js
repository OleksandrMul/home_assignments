'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    const VALUE_TO_FILL_FIRST_HALF = 1
    const VALUE_TO_FILL_SECOND_HALF = 7

    const numberOfItems = parseInt(prompt('Enter the number of items: ', 6)) || 6

    if (numberOfItems > 0) {

        let newArray = new Array(numberOfItems)
            .fill(VALUE_TO_FILL_FIRST_HALF, 0, numberOfItems / 2)
            .fill(VALUE_TO_FILL_SECOND_HALF, Math.floor(numberOfItems / 2))

        printValue(newArray, 'Value from new array')
    } else {
        throw new Error("Error: Please enter correct positive number!");
    }
}