export class TableSelection {
    static className = 'selected'

    constructor() {
        this.group = []
    }

    select($el) {
        this.clearGroup()

        this.group.push($el)

        $el.addClass(TableSelection.className).focus()
    }
    selectGroup() {}

    clearGroup() {
        this.group.forEach(i => i.removeClass(TableSelection.className))
        this.group = [];

        return this
    }
}