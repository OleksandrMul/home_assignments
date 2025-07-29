'use strict'

const NUMBER_FIRST_MONTH_OF_YEAR = 1
const NUMBER_SECOND_MONTH_OF_YEAR = 2
const NUMBER_LAST_MONTH_OF_YEAR = 12

const NUMBER_MONTH_BEGINNING_SPRING = 3
const NUMBER_MONTH_END_SPRING = 5

const NUMBER_MONTH_BEGINNING_SUMMER = 6
const NUMBER_MONTH_END_SUMMER = 8

const NUMBER_MONTH_BEGINNING_AUTUMN = 9
const NUMBER_MONTH_END_AUTUMN = 11

const NAME_OF_WINTER = 'ЗИМА'
const NAME_OF_SPRING = 'ВЕСНА'
const NAME_OF_SUMMER = 'ЛІТО '
const NAME_OF_AUTUMN = 'ОСІНЬ'

const ERROR_MESSAGE = `<p style="color: red;">Введіть коректний номер місяця в діапазоні від ${NUMBER_FIRST_MONTH_OF_YEAR} до ${NUMBER_LAST_MONTH_OF_YEAR}.</p>`

const monthNumber = parseInt(prompt('Введіть номер місяця:', 5))
let nameSeason = ''

if (monthNumber >= NUMBER_FIRST_MONTH_OF_YEAR && monthNumber <= NUMBER_LAST_MONTH_OF_YEAR) {

    if (monthNumber === NUMBER_LAST_MONTH_OF_YEAR || monthNumber === NUMBER_FIRST_MONTH_OF_YEAR || monthNumber === NUMBER_SECOND_MONTH_OF_YEAR ) {

        nameSeason = NAME_OF_WINTER
    } else if (monthNumber >= NUMBER_MONTH_BEGINNING_SPRING && monthNumber <= NUMBER_MONTH_END_SPRING) {

        nameSeason = NAME_OF_SPRING
    }
    else if (monthNumber >= NUMBER_MONTH_BEGINNING_SUMMER && monthNumber <= NUMBER_MONTH_END_SUMMER) {

        nameSeason = NAME_OF_SUMMER
    } else if (monthNumber >= NUMBER_MONTH_BEGINNING_AUTUMN && monthNumber <= NUMBER_MONTH_END_AUTUMN) {

        nameSeason = NAME_OF_AUTUMN
    }
} else {
    nameSeason = ERROR_MESSAGE
}

document.write(`
    <h2 style="color: blue;">${nameSeason}</h2>
`)