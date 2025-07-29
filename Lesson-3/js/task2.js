'use strict'

const priceOfProduct = parseFloat(prompt('Введіть ціну товару:', 50.25))
const amountOfMoney = parseFloat(prompt('Введіть кількість грошей:', 100.50))
const LOTTERY_PRICE = 4

if (amountOfMoney < priceOfProduct) {
    document.write(`
        <h2 style="color: red;">У вас недостатньо грошей, у покупці відмовлено!</h2>
    `)
} else {

    let balanceOfMoney = Number((amountOfMoney - priceOfProduct).toFixed(2))
    if (balanceOfMoney >= LOTTERY_PRICE) {

        const message = `
            Вітаємо з покупкою товару! У вас залишилось ще ${balanceOfMoney} грн. 
            Можливо, бажаєте придбати лотерейний квиток за ${LOTTERY_PRICE} грн?
        `
        if (confirm(message)) {

            balanceOfMoney = Number((balanceOfMoney - LOTTERY_PRICE).toFixed(2))
            document.write(`
                <h2 style="color: blue;">Вітаю, ви купили ще й лотерейний квиток!</h2>
                <h3 style="color: darkblue;">У вас залишилось ${balanceOfMoney} грн</h3>
            `)
        } else {
            document.write(`
                <h2 style="color: brown;">Шкода....</h2>
            `)
        }
    } else {
        document.write(`
            <h2 style="color: blue;">Вітаємо з покупкою товару!</h2>
        `)
    }
}