'use strict'

// 1. Вводимо необхідні дані
const lengthInCentimeters = parseFloat(prompt('Введіть довжину в сантиметрах', 0))
const CENTIMETERS_PER_METER = 100
const CENTIMETERS_PER_KILOMETER = 100000

// 2. Знаходимо результат
const lengthInMeters = lengthInCentimeters / CENTIMETERS_PER_METER
const lengthInKilometers = lengthInCentimeters / CENTIMETERS_PER_KILOMETER

// 3. Виводимо результат
document.write(`
    <h2>Результат</h2>
    <h3>Довжина у сантиметрах = ${lengthInCentimeters}(cm)</h3>
    <h3>Довжина у метрах = ${lengthInMeters}(m)</h3>
    <h3>Довжина у кілометрах = ${lengthInKilometers}(km)</h3>
`)