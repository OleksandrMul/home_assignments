/***
 * Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). 
 * Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
 */

type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7
const MIN_DAY: DayOfWeek = 1
const MAX_DAY: DayOfWeek = 7

function getRandomNumber(minV: number, maxV: number): number {
    return minV + Math.floor(Math.random() * (maxV - minV + 1))
}

function getRandomArray(arrLength: number, minV: number, maxV: number): DayOfWeek[] {
    let arr: DayOfWeek[] = []
    for (let i = 0; i < arrLength; i++) {
        const randNum = getRandomNumber(minV, maxV) as DayOfWeek
        arr.push(randNum)
    }
    return arr
}

function getRandomTable(rowsNumber: number, colsNumber: number, minV: number, maxV: number): DayOfWeek[][] {
    let table: DayOfWeek[][] = []
    for (let rowNumber = 0; rowNumber < rowsNumber; rowNumber++) {
        const randRow: DayOfWeek[] = getRandomArray(colsNumber, minV, maxV)
        table.push(randRow)
    }
    return table
}

const table: DayOfWeek[][] = getRandomTable(4, 8, MIN_DAY, MAX_DAY)
console.log(table);

const numberSundays: number[] = table.map((row: DayOfWeek[]) => row.reduce((counter: number, day: DayOfWeek): number => day === 7 ? counter += 1 : counter, 0))
console.log(`${numberSundays}`)
document.write(`<h2>Number of Sundays for each row = ${numberSundays}</h2>`)
