'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    function getArrayCarNumbersStartWithA(arrayCarNumbers) {

        return arrayCarNumbers.filter((carNumber) => carNumber[0].toUpperCase() === 'A')
    }

    const carNumbersSequence = [
        "UA7",
        "B92B",
        "KX9A",
        "a44",
        "a11A",
        "FR-812",
        "DEX77",
        "UA-442",
        "IT9955",
        "a123A",
        "US-98X22",
        "PL-77M91",
        "NL-AB992C",
        "A76543a",
        "AR9021R",
        "aX7712X",
        "AU5544A"
    ]

    if (carNumbersSequence.length > 0) {

        const arrayCarNumbersStartWithA = getArrayCarNumbersStartWithA(carNumbersSequence)

        printValue(arrayCarNumbersStartWithA, 'New array of car numbers starting with "A"')
    } else {
        throw new Error('Error: Array of car numbers sequence is empty!');
    }
}