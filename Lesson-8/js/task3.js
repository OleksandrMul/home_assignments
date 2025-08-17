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

    function getTotalAmountMoney(sequencePayments, startNum = 0, endNum = sequencePayments.length, changeIterator = 1) {
        let total = 0
        for (let i = startNum; i < endNum; i += changeIterator) {
            total += sequencePayments[i]
        }

        return total
    }

    const MIN_NUMBER = 150
    const MAX_NUMBER = 1000
    const MONTHS_IN_YEAR = 12

    const sequenceOfPayments = fillArray(MONTHS_IN_YEAR, MIN_NUMBER, MAX_NUMBER)

    const wholeYearPayments = getTotalAmountMoney(sequenceOfPayments)
    const firstHalfOYear = getTotalAmountMoney(sequenceOfPayments, 0, sequenceOfPayments.length / 2)
    const secondHalfOYear = getTotalAmountMoney(sequenceOfPayments, Math.floor(sequenceOfPayments.length / 2))
    const forSummer = getTotalAmountMoney(sequenceOfPayments, 5, 8)
    const forSecondQuarter = getTotalAmountMoney(sequenceOfPayments, 3, 6)
    const forEvenMonths = getTotalAmountMoney(sequenceOfPayments, 1, sequenceOfPayments.length, 2)
    const forSeasonStartMonths = getTotalAmountMoney(sequenceOfPayments, 2, sequenceOfPayments.length, 3)

    printValue(wholeYearPayments, '1) The total amount of money for the <span>whole year</span>.')
    printValue(firstHalfOYear, '2) The total amount of money in the <span>first half</span> of the year.')
    printValue(secondHalfOYear, '3) The total amount of money in the <span>second half</span> of the year.')
    printValue(forSummer, '4) The total amount of money for the <span>summer</span>.')
    printValue(forSecondQuarter, '5) The total amount of money for the <span>second quarter</span>.')
    printValue(forEvenMonths, '6) The total amount of money for the <span>even months</span>.')
    printValue(forSeasonStartMonths, '7) The total amount of money for the months that are the <span>beginning of the season</span> (spring, summer, autumn, winter).')
}