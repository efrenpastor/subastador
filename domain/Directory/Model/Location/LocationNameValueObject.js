import { Model } from "../../../domain";
import { InvalidLocationName } from "../../Errors/Location/InvalidLocationName";

export class LocationNameValueObject extends Model {
    static create({ locationName }) {
        LocationNameValueObject.validate({ locationName })
        return new LocationNameValueObject({ locationName })
    }

    static validate({ locationName }) {
        if (typeof locationName !== 'string') {
            throw InvalidLocationName.create(
                `[LocationNameValueObject.validate] locationName(${locationName}) must be of type string`
            )
        }
    }

    constructor({ locationName }) {
        super()
        this._locationName = locationName
    }

    value() {
        return this._locationName
    }

    toJSON() {
        return { locationName: this.value() }
    }
}