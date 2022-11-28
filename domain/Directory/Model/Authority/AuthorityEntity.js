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
        return this._code
    }

    description() {
        return this._description._code
    }

    address() {
        return this._address._code
    }

    phone() {
        return this._phone._code
    }

    fax() {
        return this._fax._code
    }

    email() {
        return this._email._code
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