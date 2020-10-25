import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'

export class Formula extends ExcelComponent {
    static className = 'excel-formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options
        });
    }

    init() {
        super.init();
        this.$formula = this.$root.find('[data-input="formula"]')
        this.$on('table:select', $cell => this.$formula.text($cell.text()))
        this.$on('table:input', $cell => this.$formula.text($cell.text()))
    }

    onInput(event) {
        this.$emit('formula:input', $(event.target).text())
    }

    onKeydown(event) {
        const keys = [
            'Enter',
            'Tab'
        ]
        if (keys.includes(event.key)) {
            event.preventDefault()
            event.target.textContent = ''
            this.$emit('formula:enter')
        }
    }

    toHTML() {
        return `
            <div class="excel-formula__info">fx</div>
            <div class="excel-formula__input" data-input="formula" contenteditable="true" spellcheck="false"></div>
        `
    }
}