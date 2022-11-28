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
        return this._id
    }

    url() {
        return this._url
    }

    status() {
        return this._status
    }

    end_confirm() {
        return this._end_confirm
    }

    url_boe() {
        return this._url_boe
    }

    type() {
        return this._type
    }

    account_record() {
        return this._account_record
    }

    start_date() {
        return this._start_date
    }

    end_date() {
        return this._end_date
    }

    amunt_claimed() {
        return this._amunt_claimed
    }

    num_lots() {
        return this._num_lots
    }

    id_boe() {
        return this._id_boe
    }

    auction_value() {
        return this._auction_value
    }

    valuation() {
        return this._valuation
    }

    min_bid() {
        return this._min_bid
    }

    interbidding() {
        return this._interbidding
    }

    deposit() {
        return this._deposit
    }

    postal_code() {
        return this._postal_code
    }

    city() {
        return this._city
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