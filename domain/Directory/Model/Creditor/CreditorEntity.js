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
        return this._name
    }

    nif() {
        return this._nif
    }

    address() {
        return this._address
    }

    locality() {
        return this._locality
    }

    province() {
        return this._province
    }

    country() {
        return this._country
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