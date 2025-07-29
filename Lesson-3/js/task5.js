'use strict'

const A = 'Мотоцикл'
const B = 'Легковий автомобіль.'
const C = 'Вантажний автомобіль.'
const ERROR = '<p style="color: red;">Невірна категорія водія!</p>'

const driverCategory = prompt('Введіть категорію водія:', 'A').toUpperCase()

let vehicle = ''
switch (driverCategory) {
    case 'A':
        vehicle = A
        break;
    case 'B':
        vehicle = B
        break;
    case 'C':
        vehicle = C
        break;
    default:
        vehicle = ERROR
        break;
}

document.write(`
    <h2 style="color: blue;">${vehicle}</h2>
`)