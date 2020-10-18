const CODES = {
    A: 65,
    Z: 90
}

function createRow(info, data) {
    return `
        <div class="row">
            <div class="row-info">${info}</div>
            <div class="row-data">${data}</div>
        </div>
    `
}

function createCol(value) {
    return `<div class="column">${value}</div>`
}

function createCell(value) {
    return `<div class="cell" contenteditable spellcheck="false">${value}</div>`
}

function toChar(item, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const cols = new Array(colsCount).fill('')
        .map(toChar)
        .map(createCol)
        .join('')

    const rows = []
    rows.push(createRow('', cols))

    const cells = new Array(colsCount).fill('')
        .map(createCell)
        .join('')

    new Array(rowsCount).fill('')
        .map((item, index) => createRow(index + 1, cells))
        .map(item => rows.push(item))

    return rows.join('')
}