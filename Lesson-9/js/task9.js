'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    function getArrayFirstLetters(arrayOfNames) {

        return arrayOfNames.map((nameItem) => nameItem[0])
    }

    const arrayNames = [
        "Alice",
        "Benjamin",
        "Charlotte",
        "David",
        "Emma",
        "Frank",
        "Grace",
        "Henry",
        "Jack"
    ];


    if (arrayNames.length > 0) {

        const arrayFirstLetters = getArrayFirstLetters(arrayNames)

        printValue(arrayFirstLetters, 'Array of first letters of names')
    } else {
        throw new Error('Error: Array of names is empty!');
    }
}