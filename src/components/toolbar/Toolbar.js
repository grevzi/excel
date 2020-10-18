import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static className = 'excel-toolbar'
    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click']
        });
    }
    onClick(event) {
        console.log('onClick', event.target);
    }
    toHTML() {
        return `
            <button type="button" class="excel-header__button" aria-label="bold">
                <i class="material-icons">format_bold</i>
            </button>
            <button type="button" class="excel-header__button" aria-label="italic">
                <i class="material-icons">format_italic</i>
            </button>
            <button type="button" class="excel-header__button" aria-label="underline">
                <i class="material-icons">format_underline</i>
            </button>
            <button type="button" class="excel-header__button" aria-label="align left">
                <i class="material-icons">format_align_left</i>
            </button>
            <button type="button" class="excel-header__button" aria-label="align center">
                <i class="material-icons">format_align_center</i>
            </button>
            <button type="button" class="excel-header__button" aria-label="align right">
                <i class="material-icons">format_align_right</i>
            </button>
            <button type="button" class="excel-header__button" aria-label="align justify">
                <i class="material-icons">format_align_justify </i>
            </button>
        `
    }
}