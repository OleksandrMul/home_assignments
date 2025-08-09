'use strict'

if (confirm('Почати тестування?')) {

    let stockBoxesOfApples = 15
    let numberOfCars = 0

    while (stockBoxesOfApples > 0) {

        numberOfCars += 1
        let boxesToLoad = parseInt(prompt(`A car arrived! There are ${stockBoxesOfApples} boxes in stock. How many boxes to load into the car number ${numberOfCars}?`, 1))

        if (isFinite(boxesToLoad) && boxesToLoad > 0) {

            if (boxesToLoad > stockBoxesOfApples) {
                alert(`Error: The specified quantity (${boxesToLoad}) exceeds the number of boxes in the warehouse (${stockBoxesOfApples})!`)
                numberOfCars -= 1
                continue
            }

            stockBoxesOfApples -= boxesToLoad
        } else {
            alert('Error: Please enter correct positive number.')
            numberOfCars -= 1
        }
    }

    document.write(`<h2 style="color: green;">Congratulations! ${numberOfCars} cars successfully loaded.</h2>`)
}