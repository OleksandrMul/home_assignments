'use strict'

if (confirm('Почати тестування?')) {

    const FIRST_DAY_DISTANCE = 10
    const DAILY_ALLOWANCE_INCREASE_PERCENTAGE = 10
    const NUMBER_OF_DAYS = 7

    const CHECK_DISTANCE_20 = 20
    const CHECK_DISTANCE_60 = 60

    let dailyDistance = FIRST_DAY_DISTANCE
    let totalDistance = FIRST_DAY_DISTANCE

    let firstDayOver20 = 0
    let firstDayTotalOver60 = 0
    for (let day = 2; day <= NUMBER_OF_DAYS; day++) {

        dailyDistance += (dailyDistance * DAILY_ALLOWANCE_INCREASE_PERCENTAGE) / 100
        totalDistance += dailyDistance

        if (totalDistance >= CHECK_DISTANCE_20 && firstDayOver20 === 0) firstDayOver20 = day
        if (totalDistance >= CHECK_DISTANCE_60 && firstDayTotalOver60 === 0) firstDayTotalOver60 = day
    }

    if (firstDayOver20) {
        document.write(`<h2 style="color: blue;">The runner ran more than ${CHECK_DISTANCE_20}km on the ${firstDayOver20} day.`)
    }

    if (firstDayTotalOver60) {
        document.write(`<h2 style="color: blue;">The total distance will exceed ${CHECK_DISTANCE_60}km on the ${firstDayTotalOver60} day.`)
    }

    document.write(`<h2 style="color: green;">The total distance for ${NUMBER_OF_DAYS} days is ${totalDistance.toFixed(2)}km.`)
}