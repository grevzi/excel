import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '@core/dom';

export class Table extends ExcelComponent {
    static className = 'excel-table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: [
                // 'click',
                'mousedown',
                // 'mousemove',
                // 'mouseup'
            ]
        });
    }

    onClick(event) {
        console.log('onClick', event.target);
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            const $resizer = $(event.target)
            const $parent = $resizer.closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            console.log(coords);

            document.onmousemove = e => {
                const delta = Math.floor(e.pageX - coords.right)
                const width = coords.width + delta
                $parent.$el.style.width = width + 'px'
            }

            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }

    onMousemove(event) {
        console.log('onMousemove', event.target);
    }

    onMouseup(event) {
        console.log('onMouseup', event.target);
    }

    toHTML() {
        return createTable(20)
    }
}