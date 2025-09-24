"use strict";
/** Користувач задає кількість оцінок і натискає на кнопку «get
    table». В результаті формується таблиця з input, куди
    користувач вводить оцінки. Після цього натискає на кнопку
    “get sum” і знаходить середнє значення.
 */
/**
 * Print error
 */
function printError(msg) {
    document.getElementById("error").innerText = `${msg}`;
    setTimeout(() => {
        document.getElementById("error").innerText = '';
    }, 3000);
}
/**
 * Remove exist element from DOM by CSS selector
 */
function removeIfExists(selector) {
    if (document.querySelector(selector)) {
        document.querySelector(selector).remove();
    }
}
/**
 * Create a table
 */
function createTable(table, rows = 1, cols = 1) {
    for (let row = 0; row < rows; row++) {
        const tr = document.createElement('tr');
        for (let col = 1; col <= cols; col++) {
            const td = document.createElement('td');
            td.innerHTML = `<input class='ratingInput' value='${(col + row)}' min='1' id='${(col + row)}' type='number' />`;
            tr.append(td);
        }
        table.append(tr);
    }
}
/**
 * Generate table and add to DOM
 */
function generateTable(rows = 1, cols = 1) {
    if (cols < 1)
        throw new Error("Error: Number ratings is incorrect");
    const table = document.createElement('table');
    createTable(table, cols, rows);
    const getSumBtn = document.createElement('button');
    getSumBtn.textContent = "Get Sum";
    getSumBtn.classList.add("getSumBtn");
    getSumBtn.onclick = getAverageRating;
    if (document.querySelector('.content')) {
        removeIfExists('table');
        removeIfExists('.getSumBtn');
        removeIfExists('.sumRes');
        document.querySelector('.content').append(table, getSumBtn);
    }
}
/**
 * Calculate average rating
 */
function getAverageRating() {
    let sum = 0;
    const ratingList = document.querySelectorAll('.ratingInput');
    for (const rating of ratingList) {
        sum += Math.abs(parseFloat(rating.value));
    }
    const sumAvr = sum / ratingList.length;
    printResult(sumAvr);
}
/**
 * Print result
 */
function printResult(res) {
    const result = document.createElement('div');
    result.textContent = `Average sum = ${res}`;
    result.classList.add("sumRes");
    if (document.querySelector('.content')) {
        removeIfExists('.sumRes');
        document.querySelector('.content').append(result);
    }
}
/**
 * Start the program
 */
function run() {
    try {
        const numRating = parseInt(document.getElementById("numRating").value || "1");
        generateTable(1, numRating);
    }
    catch (error) {
        document.getElementById("numRating").value = '1';
        printError(error.message);
    }
}
window.onload = function () {
    if (document.getElementById('get-table')) {
        document.getElementById('get-table').onclick = run;
    }
};
