'use strict'

const firstChildName = prompt("Введіть ім'я першої дитини:", "Lisa")
const numberOfCandiesForFirstChild = parseInt(prompt('Введіть кількість цукерок першої дитини:', 5))

const secondChildName = prompt("Введіть ім'я другої дитини:", "Ivan")
const numberOfCandiesForSecondChild = parseInt(prompt('Введіть кількість цукерок другої дитини:', 3))

if (numberOfCandiesForFirstChild > numberOfCandiesForSecondChild) {
    document.write(`
        <h2 style="color: blue;">У ${firstChildName} цукерок більше ніж у ${secondChildName}.</h2>
    `)
} else if (numberOfCandiesForSecondChild > numberOfCandiesForFirstChild) {
    document.write(`
        <h2 style="color: blue;">У ${secondChildName} цукерок більше ніж у ${firstChildName}.</h2>
    `)
} else {
    document.write(`
        <h2 style="color: brown;">Кількість цукерок однакова.</h2>
    `)
}
