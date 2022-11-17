export class Cache {
    static create({ limit = 10 }) {
        const mem = {}
        return new Cache({ mem, limit })
    }

    constructor({ mem, limit }) {
        this._mem = mem
        this._limit = limit
    }

    get(key) {
        return this._mem[key] || null
    }

    getAll() {
        return this._mem
    }

    set(key, obj) {
        if (Object.keys(this._mem).length >= this._limit) {
            delete this._mem[Object.keys(this._mem)[0]]
            this._mem[key] = obj
        } else {
            this._mem[key] = obj
        }
    }
}