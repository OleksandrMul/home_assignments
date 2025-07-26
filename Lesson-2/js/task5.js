'use strict'

// 1. Вводимо необхідні дані
const seconds = parseInt(prompt('Введіть кількість секунд', 0))
const SECONDS_IN_HOUR = 3600
const SECONDS_IN_MINUTE = 60

// 2. Знаходимо результат
const hours = Math.floor(seconds / SECONDS_IN_HOUR)
const remainingSecond = seconds % SECONDS_IN_HOUR
const minutes = Math.floor(remainingSecond / SECONDS_IN_MINUTE)

// 3. Виводимо результат
document.write(`
    <h2>Результат</h2>
    <h3>Кількість секунд, що пройшла від початку доби = ${seconds}(s)</h3>
    <h3>Кількість годин = ${hours}(h)</h3>
    <h3>Кількість хвилин = ${minutes}(min)</h3>
`)