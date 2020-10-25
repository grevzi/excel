export class Emitter {
    constructor() {
        this.listeners = {}
    }

    emit(event, ...args) {
        if (!Object.keys(this.listeners).includes(event)) {
            return false
        }

        this.listeners[event].forEach(fn => fn(...args))

        return true
    }

    listen(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)

        return () => {
            this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
        }
    }
}