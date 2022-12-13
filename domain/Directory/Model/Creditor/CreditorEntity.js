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
        return typeof this._name !== 'undefined' ? this._name : null
    }

    nif() {
        return typeof this._nif !== 'undefined' ? this._nif : null
    }

    address() {
        return typeof this._address !== 'undefined' ? this._address : null
    }

    locality() {
        return typeof this._locality !== 'undefined' ? this._locality : null
    }

    province() {
        return typeof this._province !== 'undefined' ? this._province : null
    }

    country() {
        return typeof this._country !== 'undefined' ? this._country : null
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