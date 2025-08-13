'use strict'

if (confirm('Почати тестування?')) {

    function fillColumn(message) {

        return `<td>${message}</td>`
    }

    function createRow(columnsNum, message) {

        let rowHTML = ''
        for (let col = 0; col < columnsNum; col++) {

            rowHTML += fillColumn(message)
        }

        return `<tr>${rowHTML}</tr>`
    }

    function createTable(rowsNum, columnsNum, message = 'Hello') {

        let tableHTML = '<table border="2">'
        for (let row = 0; row < rowsNum; row++) {

            tableHTML += createRow(columnsNum, message)
        }

        tableHTML += '</table>'
        document.write(tableHTML)
    }

    const rowsNum = parseInt(prompt('Number of rows = ', 5)) || 5
    const columnsNum = parseInt(prompt('Number of columns = ', 5)) || 5

    if (rowsNum > 0 && columnsNum > 0) {
        createTable(rowsNum, columnsNum)
    }
}