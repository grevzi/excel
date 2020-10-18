const CODES = {
    A: 65,
    Z: 90
}

function createRow(index, data) {
    const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `
        <div class="row" data-type="resizable">
            <div class="row-info">${index ? index : ''}${resize}</div>
            <div class="row-data">${data}</div>
        </div>
    `
}

function createCol(value) {
    return `
        <div class="column" data-type="resizable">
            ${value}
            <div class="col-resize"  data-resize="col"></div>
        </div>
    `
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
    rows.push(createRow(null, cols))

    const cells = new Array(colsCount).fill('')
        .map(createCell)
        .join('')

    new Array(rowsCount).fill('')
        .map((item, index) => createRow(index + 1, cells))
        .map(item => rows.push(item))

    return rows.join('')
}