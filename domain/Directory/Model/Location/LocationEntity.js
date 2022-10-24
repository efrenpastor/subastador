import { Model } from "../../../domain";

export class LocationEntity extends Model {
    static create({ id, postal_code, city, region, province }) {
        return new LocationEntity({
            id,
            postal_code,
            city,
            region,
            province,
        })
    }

    constructor({
        id,
        postal_code,
        city,
        region,
        province
    }) {
        super()
        this._id = id
        this._postal_code = postal_code
        this._city = city
        this._region = region
        this._province = province
    }

    id() {
        return this._id
    }

    postal_code() {
        return this._postal_code
    }

    city() {
        return this._city
    }

    region() {
        return this._region
    }

    province() {
        return this._province
    }

    toJSON() {
        return {
            id: this.id(),
            postal_code: this.postal_code(),
            city: this.city(),
            region: this.region(),
            province: this.province(),
        }
    }
}