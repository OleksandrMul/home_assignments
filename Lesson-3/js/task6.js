'use strict'

const MONDAY_DAY_NAME = 'Понеділок'
const TUESDAY_DAY_NAME = 'Вівторок'
const WEDNESDAY_DAY_NAME = 'Середа'
const THURSDAY_DAY_NAME = 'Четвер'
const FRIDAY_DAY_NAME = "П'ятниця"
const SATURDAY_DAY_NAME = 'Субота'
const SUNDAY_DAY_NAME = 'Неділя'

const START_NUMBER_DAY_OF_WEEK = 1
const END_NUMBER_DAY_OF_WEEK = 7

const ERROR_MESSAGE = `<p style="color: red;">Введіть коректний день неділі в діапазоні від ${START_NUMBER_DAY_OF_WEEK} до ${END_NUMBER_DAY_OF_WEEK}.</p>`

const dayWeekNumber = parseInt(prompt('Введіть номер дня тижня:', 5))

let dayName = ''
switch (dayWeekNumber) {
    case 1:
        dayName = MONDAY_DAY_NAME
        break;
    case 2:
        dayName = TUESDAY_DAY_NAME
        break;
    case 3:
        dayName = WEDNESDAY_DAY_NAME
        break;
    case 4:
        dayName = THURSDAY_DAY_NAME
        break;
    case 5:
        dayName = FRIDAY_DAY_NAME
        break;
    case 6:
        dayName = SATURDAY_DAY_NAME
        break;
    case 7:
        dayName = SUNDAY_DAY_NAME
        break;
    default:
        dayName = ERROR_MESSAGE
        break;
}

document.write(`
    <h2 style="color: blue;">${dayName}</h2>
`)