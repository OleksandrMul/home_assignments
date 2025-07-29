'use strict'

const MIN_NUMBER = 1
const MAX_NUMBER = 5

let userNumber = parseInt(prompt(`Введіть Ваше число від ${MIN_NUMBER} до ${MAX_NUMBER}. Кількість спроб (2):`, 1))
const randomNumber = MIN_NUMBER + Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1))

if (userNumber >= MIN_NUMBER && userNumber <= MAX_NUMBER) {

    if (userNumber === randomNumber) {
        document.write(`
        <h1 style="color: blue;">Вітаю! Ви вгадали число!</h1>
    `)
    } else {

        userNumber = parseInt(prompt(`Введіть Ваше число від ${MIN_NUMBER} до ${MAX_NUMBER}. Кількість спроб (1):`, 1))

        if (userNumber >= MIN_NUMBER && userNumber <= MAX_NUMBER) {
            if (userNumber === randomNumber) {
                document.write(`
                    <h1 style="color: blue;">Вітаю! Ви вгадали число!</h1>
                `)
            } else {
                document.write(`
                    <h2 style="color: brown;">Шкода, Ви програли... Загадане число було ${randomNumber}.</h2>
                `)
            }
        } else {
            document.write(`
                <h2 style="color: red;">Помилка: Потрібно було вводити число в межах від ${MIN_NUMBER} до ${MAX_NUMBER}!Гра закінчена!</h2>
            `)
        }
    }
} else {
    document.write(`
        <h2 style="color: red;">Помилка: Введіть число в межах від ${MIN_NUMBER} до ${MAX_NUMBER}!</h2>
    `)
}