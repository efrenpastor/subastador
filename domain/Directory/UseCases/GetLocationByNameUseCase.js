import { DomainError, UseCase } from "../../domain";
import { GenericError } from "../Errors/Location/GenericError";
import { HTTPLocationRepository } from "../Repositories/Location/HTTPLocationRepository";
import { LocationNameValueObject } from '../Model/Location/LocationNameValueObject'

export class GetLocationByNameUseCase extends UseCase {
    _repository
    _config

    static create({ config }) {
        const repository = HTTPLocationRepository.create({ config })
        return new GetLocationByNameUseCase({ repository, config })
    }

    constructor({ repository, config }) {
        super()
        this._repository = repository
        this._config = config
    }

    async execute({ locationName }) {
        try {
            const locationNameValueObject = LocationNameValueObject.create({ locationName })
            const locationEntity = await this._repository.getLocationByName({
                locationName: locationNameValueObject
            })
            return locationEntity.toJSON()
        } catch (err) {
            return Promise.reject(
                err instanceof DomainError ? err : GenericError.create(`[GetLocationByNameUseCase#execute] ${err.message}`)
            )
        }
    }
}