'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    function getDiscount(price, discountPercent) {

        return (price * (1 - (discountPercent / 100)))
    }

    let prices = [200, 1599, 999, 60, 70, 1001, 2201, 101, 655, 6, 3, 9, 2, 1]
    const FIXED_PROMOTIONAL_PRICE = 1000
    const DISCOUNT_PERCENT = 30

    if (prices.length > 0 && FIXED_PROMOTIONAL_PRICE > 0 && DISCOUNT_PERCENT > 0) {

        prices.forEach((price, index, baseArray) => {

            if (price > FIXED_PROMOTIONAL_PRICE) {

                baseArray[index] = getDiscount(price, DISCOUNT_PERCENT).toFixed(2)
            }
        })

        printValue(prices, 'Array of prices')
    } else {
        throw new Error('Error: Array of prices is empty or invalid promotional price/discount percentage!');
    }
}