const BASE = {
    API_URL: 'http://localhost:3000/api',
    RESOURCES_URL: {
        LOCATIONS: '/locations'
    }
}

export class Config {
    static create(externalConfig) {
        return new Config({
            ...BASE,
            ...externalConfig
        })
    }

    constructor(config) {
        this._config = config
    }

    get(key) {
        return this._config[key]
    }

    set(key, value) {
        this._config[key] = value
        return this
    }
}