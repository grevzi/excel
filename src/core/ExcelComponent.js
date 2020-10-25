import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners);

        this.name = options.name || ''
        this.emitter = options.emitter || null
        this.unsubscribers = []

        this.prepare()
    }

    prepare() {}

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unSubscriber => unSubscriber())
    }

    toHTML() {
        return ''
    }

    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    $on(event, fn) {
        const unSubscriber = this.emitter.listen(event, fn)
        this.unsubscribers.push(unSubscriber)
    }
}