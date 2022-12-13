import { Cache } from "../utils/Cache"
import { Config } from "./config"

const interOP = (fn, name) => () => fn().then((mod) => mod[name])
const UseCases = {
    GetLocationByNameUseCase: interOP(() => import('./Directory/UseCases/GetLocationByNameUseCase'), 'GetLocationByNameUseCase'),
    GetLocationListUseCase: interOP(() => import('./Directory/UseCases/GetLocationListUseCase'), 'GetLocationListUseCase'),
    GetLocationListByNameUseCase: interOP(() => import('./Directory/UseCases/GetLocationListByNameUseCase'), 'GetLocationListByNameUseCase'),
    GetLotListByPostalCodeUseCase: interOP(() => import('./Directory/UseCases/GetLotListByPostalCodeUseCase'), 'GetLotListByPostalCodeUseCase')
}

export class Domain {
    _config
    _cache

    static create(externalConfig = {}) {
        const config = Config.create(externalConfig)
        const cache = Cache.create({ limit: 1000 })
        return new Domain({ config, cache })
    }

    constructor({ config, cache }) {
        this._config = config
        this._cache = cache
    }

    config(key, value) {
        return value ? this._config.set(key, value) : this._config.get(key)
    }

    get GetLocationByNameUseCase() {
        return this._getter('GetLocationByNameUseCase', this._cache)
    }

    get GetLocationListUseCase() {
        return this._getter('GetLocationListUseCase', this._cache)
    }

    get GetLocationListByNameUseCase() {
        return this._getter('GetLocationListByNameUseCase', this._cache)
    }

    get GetLotListByPostalCodeUseCase() {
        return this._getter('GetLotListByPostalCodeUseCase', this._cache)
    }

    _getter(name, cache) {
        const self = this
        return {
            async execute(args = {}) {
                const cacheKey = `${name}#domain`
                const cached = cache.get(cacheKey)
                if (cached) {
                    return cached.execute({ ...args })
                }

                const klass = await UseCases[name]()
                const create = klass.create({ config: self._config })
                cache.set(cacheKey, create)

                const response = create.execute({ ...args })
                return response
            }
        }
    }
}