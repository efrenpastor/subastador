import { DomainError, UseCase } from "../../domain";
import { GenericError } from "../Errors/Location/GenericError";
import { HTTPLocationRepository } from "../Repositories/Location/HTTPLocationRepository";

export class GetLocationListUseCase extends UseCase {
    _repository
    _config

    static create({ config }) {
        const repository = HTTPLocationRepository.create({ config })
        return new GetLocationListUseCase({ repository, config })
    }

    constructor({ repository, config }) {
        super()
        this._repository = repository
        this._config = config
    }

    async execute() {
        try {
            const locationListEntity = await this._repository.getLocationList()
            return locationListEntity.toJSON()
        } catch {
            return Promise.reject(
                err instanceof DomainError ? err : GenericError.create(`[GetLocationsUseCase#execute] ${err.message}`)
            )
        }
    }
}