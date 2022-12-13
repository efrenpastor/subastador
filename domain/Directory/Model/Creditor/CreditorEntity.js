import { Model } from "../../../domain"

export class CreditorEntity extends Model {
    static create({
        name,
        nif,
        address,
        locality,
        province,
        country,
    }) {
        return new CreditorEntity({
            name,
            nif,
            address,
            locality,
            province,
            country,
        })
    }

    constructor({
        name,
        nif,
        address,
        locality,
        province,
        country,
    }) {
        super()
        this._name = name
        this._nif = nif
        this._address = address
        this._locality = locality
        this._province = province
        this._country = country
    }

    name() {
        return this._name || null
    }

    nif() {
        return this._nif || null
    }

    address() {
        return this._address || null
    }

    locality() {
        return this._locality || null
    }

    province() {
        return this._province || null
    }

    country() {
        return this._country || null
    }

    toJSON() {
        return {
            name: this.name(),
            nif: this.nif(),
            address: this.address(),
            locality: this.locality(),
            province: this.province(),
            country: this.country(),
        }
    }
}