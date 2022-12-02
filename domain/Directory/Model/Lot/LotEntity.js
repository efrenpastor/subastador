export class LotEntity extends Model {
    static create({
        id,
        source,
        descripcion,
        address,
        postal_code,
        locality,
        province,
        main_residence,
        ownership,
        visitable,
        bid,
        category,
        auction,
        authority,
        creditor
    }) {
        return new LotEntity({
            id,
            source,
            descripcion,
            address,
            postal_code,
            locality,
            province,
            main_residence,
            ownership,
            visitable,
            bid,
            category,
            auction,
            authority,
            creditor
        })
    }

    constructor({
        id,
        source,
        descripcion,
        address,
        postal_code,
        locality,
        province,
        main_residence,
        ownership,
        visitable,
        bid,
        category,
        auction,
        authority,
        creditor
    }) {
        super()
        this._id = id
        this._source = source
        this._descripcion = descripcion
        this._address = address
        this._postal_code = postal_code
        this._locality = locality
        this._province = province
        this._main_residence = main_residence
        this._ownership = ownership
        this._visitable = visitable
        this._bid = bid
        this._category = category
        this._auction = auction
        this._authority = authority
        this._creditor = creditor
    }

    id() {
        return this._id
    }

    source() {
        return this._source
    }

    descripcion() {
        return this._descripcion
    }

    address() {
        return this._address
    }

    postal_code() {
        return this._postal_code
    }

    locality() {
        return this._locality
    }

    province() {
        return this._province
    }

    main_residence() {
        return this._main_residence
    }

    ownership() {
        return this._ownership
    }

    visitable() {
        return this._visitable
    }

    bid() {
        return this._bid
    }

    category() {
        return this._category
    }

    auction() {
        return this._auction
    }

    authority() {
        return this._authority
    }

    creditor() {
        return this._creditor
    }

    toJSON() {
        return {
            id: this.id(),
            source: this.source(),
            descripcion: this.descripcion.source(),
            address: this.address.source(),
            postal_code: this.postal_code(),
            locality: this.locality(),
            province: this.province(),
            main_residence: this.main_residence(),
            ownership: this.ownership(),
            visitable: this.visitable(),
            bid: this.bid(),
            category: this.category(),
            auction: this.auction().toJSON(),
            authority: this.authority().toJSON(),
            creditor: this.creditor().toJSON(),
        }
    }
}