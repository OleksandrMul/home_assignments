'use strict'

if (confirm('Почати тестування?')) {

    function printValue(value, message) {
        document.write(`<h2>${message} = ${value}</h2><br>`)
    }

    function startGame(array, numberCells, numberShips) {

        let sunkenShips = 0
        while (sunkenShips < numberShips) {

            const cellNumber = parseInt(prompt(`Enter the cell number from 0 to ${numberCells - 1}, where to shoot?`))
            if (isFinite(cellNumber) && cellNumber >= 0 && cellNumber < numberCells) {

                if (array[cellNumber] === 1) {

                    sunkenShips += 1
                    array[cellNumber] = -1
                    alert(`Congratulations! You have sunk ${sunkenShips} ship! More ships to go is ${numberShips - sunkenShips}!`)
                } else if (array[cellNumber] === 0) {

                    alert('Missed... Try again!')
                } else {

                    alert('You already shot here!')
                }

            } else {
                alert(`Error: Please enter correct positive cell number from 0 to ${numberCells - 1}!`);
                continue
            }
        }

        printValue(sunkenShips, 'Congratulations, you won, the number of ships sunk')
    }

    function generateRandomNumber(min, max) {

        return (min + Math.floor(Math.random() * (max - min + 1)))
    }

    function placeShipsInArray(array, numberShips) {

        let placedShips = 0
        while (placedShips < numberShips) {

            const randomIndex = generateRandomNumber(0, array.length - 1)
            if (array[randomIndex] === 0) {

                array[randomIndex] = 1
                placedShips += 1
            }
        }

        return array
    }

    function fillArrayZeros(array) {

        for (let i = 0; i < array.length; i++) {
            array[i] = 0
        }
    }

    function initGame(numberCells, numberShips) {

        let battlefield = Array(numberCells)

        fillArrayZeros(battlefield)
        placeShipsInArray(battlefield, numberShips)
        startGame(battlefield, numberCells, numberShips)
    }

    let numberOfCellsInArray = parseInt(prompt('Number of cells in the array: ', 10)) || 10
    let numberOfShips = parseInt(prompt('Number of ships: ', 5)) || 5

    if (numberOfCellsInArray > 0 && numberOfShips > 0) {
        if (numberOfCellsInArray >= numberOfShips) {

            initGame(numberOfCellsInArray, numberOfShips)
        } else {
            throw new Error(`Error: The number of ships (${numberOfShips}) cannot be greater than the number of cells (${numberOfCellsInArray}) in the array!`);
        }
    } else {
        throw new Error("Error: Please enter correct positive numbers!");
    }
}