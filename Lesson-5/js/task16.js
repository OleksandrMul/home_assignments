'use strict'

if (confirm('Почати тестування?')) {

    const numberWeeks = parseInt(prompt('Number of weeks?', 2))
    const NUMBER_DAYS_IN_WEEK = 7

    let storeProfit = 0
    let totalAmount = 0
    exit: for (let numWeek = 1; numWeek <= numberWeeks; numWeek++) {

        let weekAmount = 0
        for (let numDay = 1; numDay <= NUMBER_DAYS_IN_WEEK; numDay++) {

            storeProfit = parseFloat(prompt(`Enter the store profit for ${numDay} day, ${numWeek} week`))

            if (!isFinite(storeProfit)) break exit

            weekAmount += storeProfit
            totalAmount += storeProfit
        }

        
        alert(`Profit amount for ${numWeek} week is ${(weekAmount).toFixed(2)}$.`)
        document.write(`<h2 style="color: green;">Profit amount for ${numWeek} week is ${(weekAmount).toFixed(2)}$</h2>`)
    }

    document.write(`<h2 style="color: red;">Total profit amount = ${(totalAmount).toFixed(2)}$</h2>`)
}