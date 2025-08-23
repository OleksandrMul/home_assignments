'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    let arrayOfItems = [2, 5, 1, -6, 7, 10, 22, -101, 655, 6, 3, 9, 2, -1]

    if (arrayOfItems.length > 0) {

        arrayOfItems.forEach((item, index, baseArray) => {
            if (item > baseArray[0]) baseArray[index] = item * 2
        })

        printValue(arrayOfItems, 'Array of items')
    } else {
        throw new Error('Error: Array of items is empty!');
    }
}