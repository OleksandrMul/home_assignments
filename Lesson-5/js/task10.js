'use strict'

if (confirm('Почати тестування?')) {

    let firstNumber = parseFloat(prompt('Enter first number', 1))
    let secondNumber = parseFloat(prompt('Enter second number', 100))
    let startNumber = firstNumber % 2 !== 0 ? firstNumber : firstNumber + 1

    if (isFinite(firstNumber) && isFinite(secondNumber)) {

        let temporaryNumber = 0
        if (firstNumber > secondNumber) {
            temporaryNumber = secondNumber
            secondNumber = firstNumber
            firstNumber = temporaryNumber
        }

        let sumOddNumbers = 0
        for (let i = startNumber; i <= secondNumber; i += 2) {

            sumOddNumbers += i
        }

        document.write(`<h2 style="color: green;">Sum of all odd numbers between ${firstNumber} and ${secondNumber} is ${sumOddNumbers}.</h2>`)
    } else {
        document.write('<h2 style="color: red;">Error: Please enter correct numbers.</h2>')
    }
}