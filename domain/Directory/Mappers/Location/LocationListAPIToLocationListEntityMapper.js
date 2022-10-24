import { Mapper } from "../../../domain"
import { LocationEntity } from '../../Model/Location/LocationEntity'
import { LocationEntityList } from "../../Model/Location/LocationListEntity"
import { PaginationValueObject } from "../../Model/PaginationValueObject"

export class LocationListAPIToLocationListEntityMapper extends Mapper {
    static create() {
        return new LocationListAPIToLocationListEntityMapper()
    }

    map(rawApiResponse) {
        const { results, page, total_pages, total_results } = rawApiResponse

        const locationEntityList = results?.map(location => {
            const {
                _id,
                postal_code,
                place_name,
                admin_name1,
                admin_name2
            } = location

            const locationEntity = LocationEntity.create({
                id: _id,
                postal_code,
                city: place_name,
                region: admin_name1,
                province: admin_name2
            })

            return locationEntity
        })

        const paginationValueObject = PaginationValueObject.create({
            page,
            totalPages: total_pages,
            totalResults: total_results
        })

        const locationEntityListAggregate = LocationEntityList.create({
            pagination: paginationValueObject.toJSON(),
            locationEntityList: locationEntityList.map(entity => entity.toJSON())
        })

        return locationEntityListAggregate
    }
}