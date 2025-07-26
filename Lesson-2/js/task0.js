'use strict'

// 1. Вводимо необхідні дані
const a = parseInt(prompt('Введіть значення А:', 0))
const b = parseInt(prompt('Введіть значення B:', 0))
const c = parseInt(prompt('Введіть значення C:', 0))

// 2. Знаходимо результат
const s1 = a + 12 + b
const s2 = Math.sqrt((a + b) / (2 * a))
const s3 = Math.cbrt((a + b) * c)
const s4 = Math.sin(a / -b)

// 3. Виводимо результат
document.write(`
    <h2>Результат</h2>
    <h3>Значення А: ${a}<h3>
    <h3>Значення B: ${b}<h3>
    <h3>Значення C: ${c}<h3>
    <br>
    <h3>1) S1 = ${s1}<h3>
    <h3>2) S2 = ${s2}<h3>
    <h3>3) S3 = ${s3}<h3>
    <h3>4) S4 = ${s4}<h3>
`)