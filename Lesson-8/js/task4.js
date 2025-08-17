'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} ${value}$</h2>`)
    }

    function hasMoney(money) {

        return money > 0
    }

    function getAllowedProducts(amountMoney, prices, titles) {

        let result = []
        for (let i = 0; i < prices.length; i++) {
            if (amountMoney >= prices[i]) result.push(`${titles[i]} - ${prices[i]}`)
        }

        return result
    }

    function printAllowedProducts(products) {

        for (let i = 0; i < products.length; i++) {
            printValue(products[i], 'You can buy: ')
        }
    }

    function getListOfProducts(prices, titles) {

        let allProducts = 'List of all products:\n'
        for (let i = 1; i <= prices.length; i++) {

            allProducts += `Product #${i} ${titles[i - 1]} costs - ${prices[i - 1]}$\n`
        }

        return allProducts
    }

    const productsPrices = [1000, 20, 31]
    const productsTitles = ['cheese', 'juice', 'bread']
    const listOfProducts = getListOfProducts(productsPrices, productsTitles)

    alert(`Welcome to our store! \n ${listOfProducts}`)
    const amountOfMoney = parseFloat(prompt('Enter the amount of money $: ', 0)) || 0

    if (amountOfMoney >= 0) {

        if (!hasMoney(amountOfMoney)) {
            printValue(amountOfMoney, "Unfortunately, you can't afford to buy anything, your account has")
        } else {

            const allowedProducts = getAllowedProducts(amountOfMoney, productsPrices, productsTitles)

            if (allowedProducts.length > 0) {
                printValue(amountOfMoney, 'Your balance: ')
                printAllowedProducts(allowedProducts)
            } else {
                printValue(amountOfMoney, "Sorry, you don't have enough money to purchase the items. Your balance:")
            }
        }
    } else {
        throw new Error("Error: Please enter correct positive numbers!");
    }
}