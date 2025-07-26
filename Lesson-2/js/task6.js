'use strict'

// 1. Вводимо необхідні дані
const nameOfTheFirstProduct = prompt("Введіть ім'я першого товару", 'Перший товар')
const priceOfTheFirstProduct = parseFloat(prompt('Введіть вартість першого товару (грн)', 0))
const numberOfTheFirstProduct = parseInt(prompt('Введіть кількість одиниць першого товару', 0))

const nameOfTheSecondProduct = prompt("Введіть ім'я другого товару", 'Другий товар')
const priceOfTheSecondProduct = parseFloat(prompt('Введіть вартість другого товару (грн)', 0))
const numberOfTheSecondProduct = parseInt(prompt('Введіть кількість одиниць другого товару', 0))

const nameOfTheThirdProduct = prompt("Введіть ім'я третього товару", 'Третій товар')
const priceOfTheThirdProduct = parseFloat(prompt('Введіть вартість третього товару (грн)', 0))
const numberOfTheThirdProduct = parseInt(prompt('Введіть кількість одиниць третього товару', 0))

// 2. Знаходимо результат
const costOfTheFirstProduct = Number((numberOfTheFirstProduct * priceOfTheFirstProduct).toFixed(2))
const costOfTheSecondProduct = Number((numberOfTheSecondProduct * priceOfTheSecondProduct).toFixed(2))
const costOfTheThirdProduct = Number((numberOfTheThirdProduct * priceOfTheThirdProduct).toFixed(2))

const totalCost = costOfTheFirstProduct + costOfTheSecondProduct + costOfTheThirdProduct

// 3. Виводимо результат
document.write(`
    <h2>Чек АТБ</h2>
    <table border=2px>
        <tr>
            <th>Ім'я товару</th>
            <th>Кількість одиниць</th>
            <th>Вартість одиниці товару (грн)</th>
            <th>Сума всіх одиниць товару (грн)</th>
        </tr>
        <tr>
            <th>${nameOfTheFirstProduct}</th>
            <td>${numberOfTheFirstProduct} x</td>
            <td>${priceOfTheFirstProduct}</td>
            <td>${costOfTheFirstProduct}</td>
        </tr>
        <tr>
            <th>${nameOfTheSecondProduct}</th>
            <td>${numberOfTheSecondProduct} x</td>
            <td>${priceOfTheSecondProduct}</td>
            <td>${costOfTheSecondProduct}</td>
        </tr>
        <tr>
            <th>${nameOfTheThirdProduct}</th>
            <td>${numberOfTheThirdProduct} x</td>
            <td>${priceOfTheThirdProduct}</td>
            <td>${costOfTheThirdProduct}</td>
        </tr>
        <tr>
            <th>Загальна сума (грн)</th>
            <td>&nbsp;</td>
			<td>&nbsp;</td>
            <td><strong>${totalCost}</strong></td>
        </tr>
    </table>
`)