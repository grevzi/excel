class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html

            return this
        }

        return this.$el.outerHTML.trim()
    }

    text(text) {
        if (typeof text === 'string') {
            this.$el.textContent = text

            return this
        }

        if (this.$el.tagName.toLocaleLowerCase() === 'input') {
            return this.$el.value.trim()
        }

        return this.$el.textContent
    }

    clear() {
        this.html('')

        return this
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }

        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }

        return this
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    get data() {
        return this.$el.dataset
    }

    id(parse) {
        if (parse) {
            const id = this.id().split(':')
            return {
                row: +id[0],
                col: +id[1]
            }
        }
        return this.data.id
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }

    find(selector) {
        return $(this.$el.querySelector(selector))
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    css(styles) {
        Object.keys(styles).forEach(key => this.$el.style[key] = styles[key])

        return this
    }

    addClass(className) {
        this.$el.classList.add(className)

        return this
    }

    removeClass(className) {
        this.$el.classList.remove(className)

        return this
    }

    hasClass(className) {
        this.$el.classList.contains(className)

        return this
    }

    focus() {
        this.$el.focus()

        this.moveCursorToEnd()

        return this
    }

    moveCursorToEnd() {
        const pos = this.$el.textContent.length
        if (!pos) return false

        const setpos = document.createRange();
        const set = window.getSelection();

        setpos.setStart(this.$el.childNodes[0], pos);
        setpos.collapse(true);
        set.removeAllRanges();
        set.addRange(setpos);
        this.$el.focus();
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }

    return $(el)
}