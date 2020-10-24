import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize'
import {isCell, matrix, nextSelector, shouldResize} from '@/components/table/table.functions'
import {TableSelection} from '@/components/table/TableSelection'

export class Table extends ExcelComponent {
    static className = 'excel-table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown']
        });
    }

    prepare() {
        this.selection = new TableSelection();
    }

    init() {
        super.init()
        this.selection.select(this.$root.find('[data-id="0:0"]'))
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event.target)
        } else if (isCell(event)) {
            const $target = $(event.target)
            if (event.shiftKey) {
                const $cells = matrix(this.selection.current, $target)
                    .map(id => this.$root.find(`[data-id="${id}"]`))
                this.selection.selectGroup($cells)
            } else {
                this.selection.select($target)
            }
        }
    }

    onKeydown(event) {
        const keys = [
            'Enter',
            'Tab',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'ArrowLeft'
        ]
        const {key} = event

        if (keys.includes(key) && !event.shiftKey) {
            event.preventDefault()
            const $next = this.$root.find(nextSelector(key, this.selection.current.id(true)))
            this.selection.select($next)
        }
    }

    toHTML() {
        return createTable(20)
    }
}