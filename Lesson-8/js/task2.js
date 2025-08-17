'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}$</h2>`)
    }

    function generateRandomNumber(min, max) {

        return (min + Math.floor(Math.random() * (max - min + 1)))
    }

    function fillArray(itemsNumber, min, max) {
        let arr = []
        for (let i = 0; i < itemsNumber; i++) {
            const item = generateRandomNumber(min, max)
            arr.push(item)
        }
        return arr
    }

    function startGame(array) {

        let totalPrize = 0
        do {

            const userInput = prompt(`Please select positive numbers of elements from 0 to ${array.length - 1}`, 0)
            if (userInput === null) break

            const numberOfElement = parseInt(userInput)
            if (numberOfElement >= 0 && numberOfElement < array.length) {

                totalPrize += array[numberOfElement]
                alert(`You got ${array[numberOfElement]}$. Total prize is ${totalPrize}$.`);
                array[numberOfElement] = 0
            }
            else {
                alert(`Please select positive numbers of elements from 0 to ${array.length - 1}!`);
                continue
            }
        } while (true)

        return totalPrize
    }

    const NUMBER_ELEMENTS = 10
    const MIN_NUMBER = -500
    const MAX_NUMBER = 500

    const winningAmount = fillArray(NUMBER_ELEMENTS, MIN_NUMBER, MAX_NUMBER)
    let result = startGame(winningAmount)

    printValue(result, 'Total Prize')
}