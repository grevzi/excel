import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel-header'

    toHTML() {
        return `
            <input type="text" class="excel-header__input" value="New Table">
            <div>
                <button type="button" class="excel-header__button" 
                    aria-label="remove">
                    <i class="material-icons">delete</i>
                </button>
                <button type="button" class="excel-header__button" 
                    aria-label="exit">
                    <i class="material-icons">exit_to_app</i>
                </button>
            </div>
        `
    }
}