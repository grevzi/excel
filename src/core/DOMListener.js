import {capitalize} from '@core/utils';

export class DOMListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('There is no $root provided for DOMListener')
        }
        this.$root = $root
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const callback = getMethodName(listener)
            if (!this[callback]) {
                throw new Error(`The method [ ${callback} ] is not implemented in ${this.name} Component.`)
            }
            this[callback] = this[callback].bind(this)

            this.$root.on(listener, this[callback])
        })
    }
    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const callback = getMethodName(listener)
            this.$root.off(listener, this[callback])
        })
    }
}

function getMethodName(eventName) {
    return `on${capitalize(eventName)}`
}