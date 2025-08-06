'use strict'

if (confirm('Почати тестування?')) {

    const NUMBER_MONTHS_IN_YEAR = 12

    let averageTemperature = 0
    let temperatureReadings = 0
    let enteredMonths = 0
    for (let numMonth = 1; numMonth <= NUMBER_MONTHS_IN_YEAR; numMonth++) {

        const userInput = parseFloat(prompt(`Enter the temperature readings °C, for ${numMonth} month:`, 10))
        if (!isFinite(userInput)) break

        temperatureReadings += userInput
        enteredMonths++
    }

    if (enteredMonths) {
        averageTemperature = Math.floor(temperatureReadings / enteredMonths)
        document.write(`<h2 style="color: green;">Average temperature for ${enteredMonths} months = ${averageTemperature}°C</h2>`)
    } else {
        document.write(`<h2 style="color: red;">Error: Please enter correct data!</h2>`)
    }

}
