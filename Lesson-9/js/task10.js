'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {

        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    function getTaxAmount(price, taxPercent) {

        return (price * (taxPercent / 100))
    }

    function getArrayAmountTaxPaidUAH(prices, taxPercent) {

        return prices.map((price) => getTaxAmount(price, taxPercent).toFixed(2))
    }

    const pricesUAH = [200, 1599, 999, 60, 70, 1001, 2201, 101, 655, 6, 3, 9, 2, 1]
    const TAX_PERCENT = 20

    if (pricesUAH.length > 0 && TAX_PERCENT > 0) {

        const arrayAmountTaxPaidUAH = getArrayAmountTaxPaidUAH(pricesUAH, TAX_PERCENT)

        printValue(arrayAmountTaxPaidUAH, 'Array that will contain the amount of tax paid in UAH')
    } else {
        throw new Error('Error: Array of prices is empty or invalid tax percentage!');
    }
}