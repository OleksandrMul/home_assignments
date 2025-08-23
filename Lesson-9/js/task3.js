'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    const VALUE_TO_FILL_FIRST_ITEMS = 1
    const VALUE_TO_FILL_ANOTHER_ITEMS = 7

    const numberOfItems = parseInt(prompt('Enter the number of items: ', 7)) || 7

    if (numberOfItems > 0 && numberOfItems >= 5) {

        let newArray = new Array(numberOfItems)
            .fill(VALUE_TO_FILL_FIRST_ITEMS, 0, 5)
            .fill(VALUE_TO_FILL_ANOTHER_ITEMS, 5)

        printValue(newArray, 'Value from new array')
    } else {
        throw new Error("Error: Please enter correct positive number!");
    }
}