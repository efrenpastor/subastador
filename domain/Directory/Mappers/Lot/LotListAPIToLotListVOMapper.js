import { PaginationValueObject } from '../../Model/PaginationValueObject'
import { LotListValueObject } from '../../Model/Lot/LotListValueObject'
import { LotAPIToLotEntityMapper } from './LotAPIToLotEntityMapper'
import { Mapper } from '../../../domain'

export class LotListAPIToLotListVOMapper extends Mapper {
    _lotAPIToLotEntityMapper

    static create() {
        const lotAPIToLotEntityMapper = LotAPIToLotEntityMapper.create()
        return new LotListAPIToLotListVOMapper({ lotAPIToLotEntityMapper })
    }

    constructor({ lotAPIToLotEntityMapper }) {
        super()
        this._lotAPIToLotEntityMapper = lotAPIToLotEntityMapper
    }

    map(rawApiResponse) {
        const { results, page, total_pages, total_results } = rawApiResponse
        const lotEntityList = results?.map(lot => this._lotAPIToLotEntityMapper.map(lot))
        const paginationValueObject = PaginationValueObject.create({
            page,
            totalPages: total_pages,
            totalResults: total_results
        })
        const lotEntityListAggregate = LotListValueObject.create({
            pagination: paginationValueObject.toJSON(),
            lotsEntityList: lotEntityList.map(entity => entity.toJSON())
        })

        return lotEntityListAggregate
    }
}