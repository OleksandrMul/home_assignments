'use strict'

// 1. Вводимо необхідні дані
const MIN_NUMBER_OF_MONTHS = 1
const MAX_NUMBER_OF_MONTHS = 12

const MIN_DAY_OF_WEEK = 0
const MAX_DAY_OF_WEEK = 6

// 2. Знаходимо результат
const randomNumberOfMonth = MIN_NUMBER_OF_MONTHS + Math.floor(Math.random() * (MAX_NUMBER_OF_MONTHS - MIN_NUMBER_OF_MONTHS + 1))
const randomDayOfWeek = MIN_DAY_OF_WEEK + Math.floor(Math.random() * (MAX_DAY_OF_WEEK - MIN_DAY_OF_WEEK + 1))
const sumRandomNumbers = randomNumberOfMonth + randomDayOfWeek

// 3. Виводимо результат
document.write(`
    <h2>Результат</h2>
    <h3>Випадковий номер місяця = ${randomNumberOfMonth}</h3>
    <h3>Випадковий номер дня = ${randomDayOfWeek}</h3>
    <h3>Сума = ${sumRandomNumbers}.</h3>
`)