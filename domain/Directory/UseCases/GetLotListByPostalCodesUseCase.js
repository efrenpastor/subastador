import { DomainError, UseCase } from "../../domain";
import { GenericError } from "../Errors/Location/GenericError";
import { LocationPCValueObject } from "../Model/Location/LocationPCValueObject";
import { HTTPLotRepository } from "../Repositories/Lot/HTTPLotRepository";

export class GetLotListByPostalCodesUseCase extends UseCase {
    _repository
    _config

    static create({ config }) {
        const repository = HTTPLotRepository.create({ config })   
        return new GetLotListByPostalCodesUseCase({ repository, config })
    }

    constructor({ config, repository }) {
        super()
        this._config = config
        this._repository = repository
    }

    async execute({ locationPCS }) {
        try {
            const locationPCSValueObject = locationPCS.map(locationPC => LocationPCValueObject.create({ locationPC }))
            const lotListValueObject = await this._repository.getLotListByPostalCodes({ locationPCS: locationPCSValueObject })
            return lotListValueObject.toJSON()
        } catch (err) {
            return Promise.reject(
                err instanceof DomainError ? err : GenericError.create(`[GetLotListByPostalCodeUseCase#execute] ${err.message}`)
            )
        }
    }
}
