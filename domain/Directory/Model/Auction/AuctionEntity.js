import { Model } from "../../../domain"

export class AuctionEntity extends Model {
    static create({
        id,
        url,
        status,
        end_confirm,
        url_boe,
        type,
        account_record,
        start_date,
        end_date,
        amunt_claimed,
        num_lots,
        id_boe,
        auction_value,
        valuation,
        min_bid,
        interbidding,
        deposit,
        postal_code,
        city
    }) {
        return new AuctionEntity({
            id,
            url,
            status,
            end_confirm,
            url_boe,
            type,
            account_record,
            start_date,
            end_date,
            amunt_claimed,
            num_lots,
            id_boe,
            auction_value,
            valuation,
            min_bid,
            interbidding,
            deposit,
            postal_code,
            city
        })
    }

    constructor({
        id,
        url,
        status,
        end_confirm,
        url_boe,
        type,
        account_record,
        start_date,
        end_date,
        amunt_claimed,
        num_lots,
        id_boe,
        auction_value,
        valuation,
        min_bid,
        interbidding,
        deposit,
        postal_code,
        city
    }) {
        super()
        this._id = id
        this._url = url
        this._status = status
        this._end_confirm = end_confirm
        this._url_boe = url_boe
        this._type = type
        this._account_record = account_record
        this._start_date = start_date
        this._end_date = end_date
        this._amunt_claimed = amunt_claimed
        this._num_lots = num_lots
        this._id_boe = id_boe
        this._auction_value = auction_value
        this._valuation = valuation
        this._min_bid = min_bid
        this._interbidding = interbidding
        this._deposit = deposit
        this._postal_code = postal_code
        this._city = city
    }

    id() {
        return typeof this._id !== 'undefined' ? this._id : null
    }

    url() {
        return typeof this._url !== 'undefined' ? this._url : null
    }

    status() {
        return typeof this._status !== 'undefined' ? this._status : null
    }

    end_confirm() {
        return typeof this._end_confirm !== 'undefined' ? this._end_confirm : null
    }

    url_boe() {
        return typeof this._url_boe !== 'undefined' ? this._url_boe : null
    }

    type() {
        return typeof this._type !== 'undefined' ? this._type : null
    }

    account_record() {
        return typeof this._account_record !== 'undefined' ? this._account_record : null
    }

    start_date() {
        return typeof this._start_date !== 'undefined' ? this._start_date : null
    }

    end_date() {
        return typeof this._end_date !== 'undefined' ? this._end_date : null
    }

    amunt_claimed() {
        return typeof this._amunt_claimed !== 'undefined' ? this._amunt_claimed : null
    }

    num_lots() {
        return typeof this._num_lots !== 'undefined' ? this._num_lots : null
    }

    id_boe() {
        return typeof this._id_boe !== 'undefined' ? this._id_boe : null
    }

    auction_value() {
        return typeof this._auction_value !== 'undefined' ? this._auction_value : null
    }

    valuation() {
        return typeof this._valuation !== 'undefined' ? this._valuation : null
    }

    min_bid() {
        return typeof this._min_bid !== 'undefined' ? this._min_bid : null
    }

    interbidding() {
        return typeof this._interbidding !== 'undefined' ? this._interbidding : null
    }

    deposit() {
        return typeof this._deposit !== 'undefined' ? this._deposit : null
    }

    postal_code() {
        return typeof this._postal_code !== 'undefined' ? this._postal_code : null
    }

    city() {
        return typeof this._city !== 'undefined' ? this._city : null
    }


    toJSON() {
        return {
            id: this.id(),
            url: this.url(),
            status: this.status(),
            end_confirm: this.end_confirm(),
            url_boe: this.url(),
            type: this.type(),
            account_record: this.account_record(),
            start_date: this.start_date(),
            end_date: this.end_date(),
            amunt_claimed: this.amunt_claimed(),
            num_lots: this.num_lots(),
            id_boe: this.id_boe(),
            auction_value: this.auction_value(),
            valuation: this.valuation(),
            min_bid: this.min_bid(),
            interbidding: this.interbidding(),
            deposit: this.deposit(),
            postal_code: this.postal_code(),
            city: this.city()
        }
    }
}