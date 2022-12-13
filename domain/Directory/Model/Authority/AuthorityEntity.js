import { Model } from "../../../domain"

export class AuthorityEntity extends Model {
    static create({
        code,
        description,
        address,
        phone,
        fax,
        email
    }) {
        return new AuthorityEntity({
            code,
            description,
            address,
            phone,
            fax,
            email
        })
    }

    constructor({
        code,
        description,
        address,
        phone,
        fax,
        email
    }) {
        super()
        this._code = code
        this._description = description
        this._address = address
        this._phone = phone
        this._fax = fax
        this._email = email
    }

    code() {
        return typeof this._code !== 'undefined' ? this._code : null
    }

    description() {
        return typeof this._description !== 'undefined' ? this._description : null
    }

    address() {
        return typeof this._address !== 'undefined' ? this._address : null
    }

    phone() {
        return typeof this._phone !== 'undefined' ? this._phone : null
    }

    fax() {
        return typeof this._fax !== 'undefined' ? this._fax : null
    }

    email() {
        return typeof this._email !== 'undefined' ? this._email : null
    }

    toJSON() {
        return {
            code: this.code(),
            description: this.description(),
            address: this.address(),
            phone: this.phone(),
            fax: this.fax(),
            email: this.email()
        }
    }

}