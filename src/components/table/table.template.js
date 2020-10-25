const CODES = {
    A: 65,
    Z: 90
}

function createRow(index, data) {
    const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `
        <div class="row" data-type="resizable" data-row="${index ? index : ''}">
            <div class="row-info">${index ? index : ''}${resize}</div>
            <div class="row-data">${data}</div>
        </div>
    `
}

function toCol(value, index) {
    return `
        <div class="column" data-type="resizable" data-col="${index}">
            ${value}
            <div class="col-resize"  data-resize="col"></div>
        </div>
    `
}

function toCell(row) {
    return function(_, col) {
        return `<div class="cell" 
                contenteditable 
                spellcheck="false" 
                data-col="${col}" 
                data-row="${row}"
                data-id="${row}:${col}"
                data-type="cell"
                ></div>`
    }
}

function toChar(item, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const cols = new Array(colsCount).fill('')
        .map(toChar)
        .map(toCol)
        .join('')

    const rows = []
    rows.push(createRow(null, cols))

    for (let row = 0; row < rowsCount; row++) {
        const cells = new Array(colsCount)
            .fill('')
            // .map(createCell.bind(null, row))
            .map(toCell(row))
            .join('')

        rows.push(createRow(row + 1, cells))
    }

    return rows.join('')
}