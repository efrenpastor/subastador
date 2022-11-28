import { Model } from "../../../domain";
import { PaginationValueObject } from "../PaginationValueObject";
import { LocationEntity } from "./LocationEntity";

export class LocationListValueObject extends Model {
    static create({ locationEntityList, pagination }) {
        const { page, totalPages, totalResults } = pagination
        return new LocationListValueObject({
            locationEntityList: locationEntityList.map(entity => LocationEntity.create(entity)),
            pagination: PaginationValueObject.create({
                page,
                totalPages,
                totalResults
            })
        })
    }

    constructor({ locationEntityList, pagination }) {
        super()
        this._locationEntityList = locationEntityList
        this._pagination = pagination
    }

    pagination() {
        return this._pagination
    }

    locationEntityList() {
        return this._locationEntityList
    }

    toJSON() {
        return {
            locationEntityList: this.locationEntityList().map(entity => entity.toJSON()),
            pagination: this.pagination().toJSON()
        }
    }
}