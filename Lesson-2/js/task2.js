'use strict'

// 1. Вводимо необхідні дані
const birthYear = parseInt(prompt('Введіть рік народження', 1994))
const currentYear = 2025

// 2. Знаходимо результат
const numberOfYears = currentYear - birthYear

// 3. Виводимо результат
document.write(`
    <h2>Результат</h2>
    <h3>Рік народження: ${birthYear}<h3>
    <h3>Поточний рік: ${currentYear}<h3>
    <h3>Кількість років = ${numberOfYears}<h3>
`)