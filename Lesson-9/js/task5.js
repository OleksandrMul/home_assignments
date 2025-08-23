'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    const arrayOfItems = [1, -101, 2, -1500, 2, 2, -22, 2, -30]
    let productPositiveItems = 1
    let hasPositive = false

    if (arrayOfItems.length > 0) {

        for (const item of arrayOfItems) {

            if (item > 0) {
                productPositiveItems *= item
                hasPositive = true
            }
        }

        printValue(hasPositive ? productPositiveItems : 0, 'Product of positive items')
    } else {
        throw new Error('Error: Array of items is empty!');
    }
}