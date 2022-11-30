import { DomainError, UseCase } from "../../domain";
import { GenericError } from "../Errors/Location/GenericError";
import { LocationNameValueObject } from "../Model/Location/LocationNameValueObject";
import { HTTPLocationRepository } from "../Repositories/Location/HTTPLocationRepository";
import { Cache } from '../../../utils/Cache'

export class GetLocationListByNameUseCase extends UseCase {
    _repository
    _config
    _cache

    static create({ config }) {
        const repository = HTTPLocationRepository.create({ config })
        const cache = Cache.create({ limit: 10 })
        return new GetLocationListByNameUseCase({ repository, cache, config })
    }

    constructor({ repository, cache, config }) {
        super()
        this._repository = repository
        this._config = config
        this._cache = cache
    }

    async execute({ locationName }) {
        try {
            const cacheKey = `GetLocationListByNameUseCase#execute:${locationName}`
            const cached = this._cache.get(cacheKey)
            if (cached) {
                return cached.toJSON()
            }

            const locationNameValueObject = LocationNameValueObject.create({ locationName })
            const locationListVO = await this._repository.getLocationListByName({
                locationName: locationNameValueObject
            })
            this._cache.set(cacheKey, locationListVO)

            return locationListVO.toJSON()
        } catch (err) {
            return Promise.reject(
                err instanceof DomainError ? err : GenericError.create(`[GetLocationsUseCase#execute] ${err.message}`)
            )
        }
    }
}