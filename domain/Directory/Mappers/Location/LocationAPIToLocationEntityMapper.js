import { Mapper } from "../../../domain";
import { LocationEntity } from '../../Model/Location/LocationEntity'

export class LocationAPIToLocationEntityMapper extends Mapper {
    static create() {
        return new LocationAPIToLocationEntityMapper()
    }

    map(rawApiResponse) {
        const {
            _id,
            postal_code,
            place_name,
            admin_name1,
            admin_name2
        } = rawApiResponse

        const locationEntity = LocationEntity.create({
            id: _id,  
            postal_code,
            city: place_name,
            region: admin_name1,
            province: admin_name2
        })

        return locationEntity
    }
}