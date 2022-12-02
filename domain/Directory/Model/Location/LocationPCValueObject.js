import { Model } from "../../../domain";
import { InvalidLocationPC } from "../../Errors/Location/InvalidLocationPC";

export class LocationPCValueObject extends Model {
    static create({ locationPC }) {
        LocationPCValueObject.validate({ locationPC })
        return new LocationPCValueObject({ locationPC })
    }

    static validate({ locationPC }) {
        if (typeof locationPC !== 'string') {
            throw InvalidLocationPC.create(
                `[LocationPCValueObject.validate] locationPC(${locationPC}) must be of type string`
            )
        }
    }

    constructor({ locationPC }) {
        super()
        this._locationPC = locationPC
    }

    value() {
        return this._locationPC
    }

    toJSON() {
        return { locationPC: this.value() }
    }
}