export class LotEntity extends Model {
    static create({ id, postal_code, city, auction, creditor, authority }) {
        return new LotEntity({
            id,
            postal_code,
            city,
            auction,
            creditor,
            authority
        })
    }

    constructor({
        id,
        postal_code,
        city,
        auction,
        creditor,
        authority
    }) {
        super()
        this._id = id
        this._postal_code = postal_code
        this._city = city
        this._auction = auction
        this._creditor = creditor
        this._authority = authority
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

    auction() {
        return this._auction
    }

    creditor() {
        return this._creditor
    }

    authority() {
        return this._authority
    }

    toJSON() {
        return {
            id: this.id(),
            postal_code: this.postal_code(),
            city: this.city(),
            auction: this.auction().toJSON(),
            creditor: this.creditor().toJSON(),
            authority: this.authority().toJSON(),
        }
    }
}