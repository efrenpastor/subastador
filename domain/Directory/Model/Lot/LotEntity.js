import { Model } from "../../../domain";
import { AuctionEntity } from "../Auction/AuctionEntity";
import { AuthorityEntity } from "../Authority/AuthorityEntity";
import { CreditorEntity } from "../Creditor/CreditorEntity";

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
        return this._id || null
    }

    source() {
        return this._source || null
    }

    descripcion() {
        return this._descripcion || null
    }

    address() {
        return this._address || null
    }

    postal_code() {
        return this._postal_code || null
    }

    locality() {
        return this._locality || null
    }

    province() {
        return this._province || null
    }

    main_residence() {
        return this._main_residence || null
    }

    ownership() {
        return this._ownership || null
    }

    visitable() {
        return this._visitable || null
    }

    bid() {
        return this._bid || null
    }

    category() {
        return this._category || null
    }

    auction() {
        const auction = this._auction instanceof AuctionEntity ? this._auction.toJSON() : this._auction
        return auction || null
    }

    authority() {
        const authority = this._authority instanceof AuthorityEntity ? this._authority.toJSON() : this._authority
        return authority || null
    }

    creditor() {
        const creditor = this._creditor instanceof CreditorEntity ? this._creditor.toJSON() : this._creditor
        return creditor || null
    }

    toJSON() {
        return {
            id: this.id(),
            source: this.source(),
            descripcion: this.descripcion(),
            address: this.address(),
            postal_code: this.postal_code(),
            locality: this.locality(),
            province: this.province(),
            main_residence: this.main_residence(),
            ownership: this.ownership(),
            visitable: this.visitable(),
            bid: this.bid(),
            category: this.category(),
            auction: this.auction(),
            authority: this.authority(),
            creditor: this.creditor(),
        }
    }
}