'use strict'

// 1. Вводимо необхідні дані
const num1 = parseFloat(prompt('Введіть перше число:', 0))
const num2 = parseFloat(prompt('Введіть друге число:', 0))

// 2. Знаходимо результат
const sum = num1 + num2
const product = num1 * num2
const quotient = num1 / num2

// 3. Виводимо результат
document.write(`
    <h2>Результат</h2>
    <br>
    <table border=2px>
        <tr>
            <th>Шуканий результат</th>
            <th>Отримане значення</th>
        </tr>
        <tr>
            <th>Сума</th>
            <td>${sum}</td>
        </tr>
        <tr>
            <th>Добуток</th>
            <td>${product}</td>
        </tr>
        <tr>
            <th>Частка</th>
            <td>${quotient}</td>
        </tr>
    </table>
`)