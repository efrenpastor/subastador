import { DomainError, UseCase } from "../../domain";
import { GenericError } from "../Errors/Location/GenericError";
import { LocationNameValueObject } from "../Model/Location/LocationNameValueObject";
import { HTTPLocationRepository } from "../Repositories/Location/HTTPLocationRepository";

export class GetLocationListByNameUseCase extends UseCase {
    _repository
    _config

    static create({ config }) {
        const repository = HTTPLocationRepository.create({ config })
        return new GetLocationListByNameUseCase({ repository, config })
    }

    constructor({ repository, config }) {
        super()
        this._repository = repository
        this._config = config
    }

    async execute({ locationName }) {
        try {
            const locationNameValueObject = LocationNameValueObject.create({ locationName })
            const locationListEntity = await this._repository.getLocationListByName({
                locationName: locationNameValueObject
            })
            return locationListEntity.toJSON()
        } catch (err) {
            return Promise.reject(
                err instanceof DomainError ? err : GenericError.create(`[GetLocationsUseCase#execute] ${err.message}`)
            )
        }
    }
}