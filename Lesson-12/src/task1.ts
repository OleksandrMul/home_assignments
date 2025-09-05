/**
 * Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
 */

const arr: number[] = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))

document.write(`<h2>Base Array</h2>`)
printTableValue(arr)

let change: boolean
let endIndex: number = arr.length
let swapCount: number = 0

do {
    change = false
    for (let i = 1; i < endIndex; i++) {
        if (arr[i - 1] > arr[i]) {
            const tmp: number = arr[i - 1]
            arr[i - 1] = arr[i]
            arr[i] = tmp
            change = true
            swapCount += 1
            printTableValue(arr, `Swap at i=${i}`)
        }
    }
    endIndex--
} while (change)

document.write(`<h2>Sorted Array</h2>`)
printTableValue(arr)

document.write(`<h2>Total swaps during bubble sort = ${swapCount}</h2>`)

function printTableValue(arr: number[], label: string = "") {
    if (label) document.write(`<p><b>${label}</b></p>`)
    document.write(`<table border="1" cellspacing="0" cellpadding="5" style="margin-bottom:5px"><tr>`)
    arr.forEach(num => document.write(`<td>${num}</td>`))
    document.write(`</tr></table>`)
}
