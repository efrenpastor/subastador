import { Mapper } from "../../../domain"
import { LocationEntity } from '../../Model/Location/LocationEntity'
import { LocationListValueObject } from "../../Model/Location/LocationListValueObject"
import { PaginationValueObject } from "../../Model/PaginationValueObject"

export class LocationListAPIToLocationListVOMapper extends Mapper {
    static create() {
        return new LocationListAPIToLocationListVOMapper()
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
                region: admin_name2,
                province: admin_name1
            })

            return locationEntity
        })

        const paginationValueObject = PaginationValueObject.create({
            page,
            totalPages: total_pages,
            totalResults: total_results
        })

        const locationEntityListAggregate = LocationListValueObject.create({
            pagination: paginationValueObject.toJSON(),
            locationEntityList: locationEntityList.map(entity => entity.toJSON())
        })

        return locationEntityListAggregate
    }
}