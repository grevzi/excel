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

        return this
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