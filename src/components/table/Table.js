import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom';
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize';
import {isCell, shouldResize} from '@/components/table/table.functions';
import {TableSelection} from '@/components/table/TableSelection';

export class Table extends ExcelComponent {
    static className = 'excel-table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
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
            this.selection.select($(event.target))
        }
    }

    toHTML() {
        return createTable(20)
    }
}