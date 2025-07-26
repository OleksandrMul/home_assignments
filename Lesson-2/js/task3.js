'use strict'

// 1. Вводимо необхідні дані
const productPrice = parseFloat(prompt('Введіть вартість товару (грн)', 0))
const numberOfProducts = parseInt(prompt('Введіть кількість товарів', 0))
const VAT_PERCENTAGE = 5

// 2. Знаходимо результат
const totalCost = productPrice * numberOfProducts
const vatValue = totalCost * VAT_PERCENTAGE / 100
const amountIncludingVAT = totalCost + vatValue

// 3. Виводимо результат
document.write(`
    <h2>Результат</h2>
    <h3>Загальна вартість товарів = ${totalCost} (грн) та ПДВ (5% від загальної вартості) = ${vatValue} (грн).</h3>
    <h3>Сума з ПДВ: ${amountIncludingVAT} (грн).</h3>
`)