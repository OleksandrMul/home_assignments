'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    function getNumberOfEven(num1, num2, num3) {

        let countEven = 0

        if (num1 % 2 === 0) countEven += 1
        if (num2 % 2 === 0) countEven += 1
        if (num3 % 2 === 0) countEven += 1

        return countEven
    }

    function getNumberOfPositive(num1, num2, num3) {

        let countPositive = 0

        if (num1 >= 0) countPositive += 1
        if (num2 >= 0) countPositive += 1
        if (num3 >= 0) countPositive += 1

        return countPositive
    }

    function getNumberGreaterThanHundred(num1, num2, num3) {

        let countGreaterThanHundred = 0

        if (num1 > 100) countGreaterThanHundred += 1
        if (num2 > 100) countGreaterThanHundred += 1
        if (num3 > 100) countGreaterThanHundred += 1

        return countGreaterThanHundred
    }


    function findsAndPrintResults(num1, num2, num3) {

        const numberEvenNumbers = getNumberOfEven(num1, num2, num3)
        const numberPositiveNumbers = getNumberOfPositive(num1, num2, num3)
        const numberGreaterThanHundred = getNumberGreaterThanHundred(num1, num2, num3)

        printValue(numberEvenNumbers, 'Number of even numbers')
        printValue(numberPositiveNumbers, 'Number of positive numbers')
        printValue(numberGreaterThanHundred, 'Number greater than 100')
    }

    const firstNumber = parseInt(prompt('First number = ')) || 10
    const secondNumber = parseInt(prompt('Second number = ')) || 10
    const thirdNumber = parseInt(prompt('Third number = ')) || 10

    findsAndPrintResults(firstNumber, secondNumber, thirdNumber)
}
