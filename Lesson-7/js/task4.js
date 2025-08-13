'use strict'

const CENTIMETER_IN_INCH = 2.54
const KILOGRAM_IN_POUND = 2.20462
const KILOMETER_IN_MILE = 0.621371

function centimetersToInches(value) {
    return value / CENTIMETER_IN_INCH
}

function kilogramsToPounds(value) {
    return value * KILOGRAM_IN_POUND
}

function kilometersToMiles(value) {
    return value * KILOMETER_IN_MILE
}

function printValue(value, message) {
    document.write(`<h2>${message} = ${value.toFixed(2)}</h2><br>`)
}

printValue(centimetersToInches(10), 'Inches')
printValue(kilogramsToPounds(5), 'Pounds')
printValue(kilometersToMiles(15), 'Miles')