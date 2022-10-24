import { Config } from "./config"

const interOP = (fn, name) => () => fn().then((mod) => mod[name])
const UseCases = {
    GetLocationByNameUseCase: interOP(() => import('./Directory/UseCases/GetLocationByNameUseCase'), 'GetLocationByNameUseCase'),
    GetLocationListUseCase: interOP(() => import('./Directory/UseCases/GetLocationListUseCase'), 'GetLocationListUseCase'),
    GetLocationListByNameUseCase: interOP(() => import('./Directory/UseCases/GetLocationListByNameUseCase'), 'GetLocationListByNameUseCase')
}

export class Domain {
    _config

    static create(externalConfig = {}) {
        const config = Config.create(externalConfig)
        return new Domain({ config })
    }

    constructor({ config }) {
        this._config = config
    }

    config(key, value) {
        return value ? this._config.set(key, value) : this._config.get(key)
    }

    get GetLocationByNameUseCase() {
        return this._getter('GetLocationByNameUseCase')
    }

    get GetLocationListUseCase() {
        return this._getter('GetLocationListUseCase')
    }

    get GetLocationListByNameUseCase() {
        return this._getter('GetLocationListByNameUseCase')
    }

    _getter(name) {
        const self = this
        return {
            async execute(args = {}) {
                const klass = await UseCases[name]()
                const response = klass.create({ config: self._config }).execute({ ...args })
                return response
            }
        }
    }
}