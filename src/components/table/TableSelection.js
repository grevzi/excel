export class TableSelection {
    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.clearGroup()

        this.current = $el
        this.group.push($el)

        $el.addClass(TableSelection.className).focus()
    }
    selectGroup(group = []) {
        this.clearGroup()
        this.group = group
        group.forEach($el => $el.addClass(TableSelection.className))
        setTimeout(() => this.current.focus(), 1)
    }

    clearGroup() {
        this.group.forEach(i => i.removeClass(TableSelection.className))
        this.group = [];

        return this
    }
}