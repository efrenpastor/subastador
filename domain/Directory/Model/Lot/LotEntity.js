import { Model } from "../../../domain";
import { AuctionEntity } from "../Auction/AuctionEntity";
import { AuthorityEntity } from "../Authority/AuthorityEntity";
import { CreditorEntity } from "../Creditor/CreditorEntity";

export class LotEntity extends Model {
    static create({
        id,
        source,
        description,
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
            description,
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
        description,
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
        this._description = description
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
        return typeof this._id !== 'undefined' ? this._id : null
    }

    source() {
        return typeof this._source !== 'undefined' ? this._source : null
    }

    description() {
        return typeof this._description !== 'undefined' ? this._description : null
    }

    address() {
        return typeof this._address !== 'undefined' ? this._address : null
    }

    postal_code() {
        return typeof this._postal_code !== 'undefined' ? this._postal_code : null
    }

    locality() {
        return typeof this._locality !== 'undefined' ? this._locality : null
    }

    province() {
        return typeof this._province !== 'undefined' ? this._province : null
    }

    main_residence() {
        return typeof this._main_residence !== 'undefined' ? this._main_residence : null
    }

    ownership() {
        return typeof this._ownership !== 'undefined' ? this._ownership : null
    }

    visitable() {
        return typeof this._visitable !== 'undefined' ? this._visitable : null
    }

    bid() {
        return typeof this._bid !== 'undefined' ? this._bid : null
    }

    category() {
        return typeof this._category !== 'undefined' ? this._category : null
    }

    auction() {
        const auction = this._auction instanceof AuctionEntity ? this._auction.toJSON() : this._auction
        return typeof auction !== 'undefined' ? auction : null
    }

    authority() {
        const authority = this._authority instanceof AuthorityEntity ? this._authority.toJSON() : this._authority
        return typeof authority !== 'undefined' ? authority : null
    }

    creditor() {
        const creditor = this._creditor instanceof CreditorEntity ? this._creditor.toJSON() : this._creditor
        return typeof creditor !== 'undefined' ? creditor : null
    }

    toJSON() {
        return {
            id: this.id(),
            source: this.source(),
            description: this.description(),
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