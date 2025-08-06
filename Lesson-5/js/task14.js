'use strict'

if (confirm('Почати тестування?')) {

    const AMOUNT_MUST_BE_PAID = 10000

    let amountUserMoney = 0
    do {

        let amountLeftToPay = AMOUNT_MUST_BE_PAID - amountUserMoney
        let userInput = Math.abs(parseFloat(prompt(`Enter the amount of money to pay for the product in the amount of ${amountLeftToPay}$`)))

        if (isFinite(userInput)) {
            amountUserMoney += userInput
        }

    } while (amountUserMoney < AMOUNT_MUST_BE_PAID);

    const changeOfMoney = amountUserMoney - AMOUNT_MUST_BE_PAID

    document.write('<h2 style="color: green;">Thank you for your purchase!</h2>')
    if (changeOfMoney > 0) document.write(`<h2 style="color: red;">Your change of money is ${changeOfMoney.toFixed(2)}</h2>`)
}
