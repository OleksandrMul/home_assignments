/** Користувач задає кількість оцінок і натискає на кнопку «get
    table». В результаті формується таблиця з input, куди
    користувач вводить оцінки. Після цього натискає на кнопку
    “get sum” і знаходить середнє значення.
 */

/**
 * Print error
 */
function printError(msg: string) {
    (document.getElementById("error") as HTMLInputElement).innerText = `${msg}`
    setTimeout(() => {
        (document.getElementById("error") as HTMLInputElement).innerText = ''
    }, 3000);
}

/**
 * Remove exist element from DOM by CSS selector
 */
function removeIfExists(selector: string) {
    if (document.querySelector(selector)) {
        (document.querySelector(selector) as HTMLTableElement).remove()
    }
}

/**
 * Create a table
 */
function createTable(table: HTMLTableElement, rows: number = 1, cols: number = 1) {

    for (let row = 0; row < rows; row++) {

        const tr = document.createElement('tr')
        for (let col = 1; col <= cols; col++) {

            const td = document.createElement('td')
            td.innerHTML = `<input class='ratingInput' value='${(col + row)}' min='1' id='${(col + row)}' type='number' />`
            tr.append(td)
        }
        table.append(tr)
    }
}

/**
 * Generate table and add to DOM 
 */
function generateTable(rows: number = 1, cols: number = 1) {

    if (cols < 1) throw new Error("Error: Number ratings is incorrect")

    const table = document.createElement('table')
    createTable(table, cols, rows)

    const getSumBtn = document.createElement('button')
    getSumBtn.textContent = "Get Sum"
    getSumBtn.classList.add("getSumBtn")
    getSumBtn.onclick = getAverageRating

    if (document.querySelector('.content')) {

        removeIfExists('table');
        removeIfExists('.getSumBtn');
        removeIfExists('.sumRes');

        (document.querySelector('.content') as HTMLInputElement).append(table, getSumBtn);
    }
}

/**
 * Calculate average rating
 */
function getAverageRating() {

    let sum = 0
    const ratingList = document.querySelectorAll('.ratingInput')

    for (const rating of ratingList) {
        sum += Math.abs(parseFloat((rating as HTMLInputElement).value))
    }

    const sumAvr = sum / ratingList.length
    printResult(sumAvr)
}

/**
 * Print result
 */
function printResult(res: number) {

    const result = document.createElement('div')
    result.textContent = `Average sum = ${res}`
    result.classList.add("sumRes")

    if (document.querySelector('.content')) {

        removeIfExists('.sumRes');
        (document.querySelector('.content') as HTMLInputElement).append(result)
    }
}

/**
 * Start the program
 */
function run() {
    try {

        const numRating = parseInt((document.getElementById("numRating") as HTMLInputElement).value || "1")
        generateTable(1, numRating)

    } catch (error) {
        (document.getElementById("numRating") as HTMLInputElement).value = '1'
        printError((error as Error).message)
    }
}

window.onload = function () {

    if (document.getElementById('get-table')) {
        (document.getElementById('get-table') as HTMLInputElement).onclick = run
    }
}