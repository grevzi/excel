import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
    static className = 'excel-table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        });
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event.target)
        }
    }

    toHTML() {
        return createTable(20)
    }
}