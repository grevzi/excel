import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'excel-formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input']
        });
    }

    onInput(event) {
        console.log('Formula onInput', event.target.textContent.trim())
    }

    toHTML() {
        return `
            <div class="excel-formula__info">fx</div>
            <div class="excel-formula__input" contenteditable="true" spellcheck="false"></div>
        `
    }
}