'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {

        document.write(`<h2>${message} - ${value}</h2>`)
    }

    function getNumbersStartWithA(carNumbers) {

        let count = 0
        for (let i = 0; i < carNumbers.length; i++) {
            if (carNumbers[i][0].toUpperCase() === 'A') count += 1
        }

        return count
    }

    function getNumbersFirstLastLettersMatch(carNumbers) {

        let count = 0
        for (let i = 0; i < carNumbers.length; i++) {
            if (carNumbers[i][0].toUpperCase() === carNumbers[i][carNumbers[i].length - 1].toUpperCase()) count += 1
        }

        return count
    }

    function getNumbersConsistMoreFiveCharacters(carNumbers) {

        let count = 0
        for (let i = 0; i < carNumbers.length; i++) {
            if (carNumbers[i].length > 5) count += 1
        }

        return count
    }

    const carNumberSequence = [
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

    if (carNumberSequence.length > 0) {

        const numbersStartWithA = getNumbersStartWithA(carNumberSequence)
        const numbersFirstLastLettersMatch = getNumbersFirstLastLettersMatch(carNumberSequence);
        const numbersConsistMoreFiveCharacters = getNumbersConsistMoreFiveCharacters(carNumberSequence);

        printValue(numbersStartWithA, 'The number of numbers starting with the letter "A"')
        printValue(numbersFirstLastLettersMatch, 'The number of numbers where the first and last letters match')
        printValue(numbersConsistMoreFiveCharacters, 'The number of numbers that consist of more than 5 characters')
    } else {
        throw new Error("Error: Array of numbers is empty!");
    }
}
