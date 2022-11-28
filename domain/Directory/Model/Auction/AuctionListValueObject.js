import { Model } from "../../../domain";
import { PaginationValueObject } from "../PaginationValueObject";
import { AuctionEntity } from "./AuctionEntity";

export class AuctionListValueObject extends Model {
    static create({ auctionEntityList, pagination }) {
        const { page, totalPages, totalResults } = pagination
        return new AuctionListValueObject({
            auctionEntityList: auctionEntityList.map(entity => AuctionEntity.create(entity)),
            pagination: PaginationValueObject.create({
                page,
                totalPages,
                totalResults
            })
        })
    }

    constructor({ auctionEntityList, pagination }) {
        super()
        this._auctionEntityList = auctionEntityList
        this._pagination = pagination
    }

    pagination() {
        return this._pagination
    }

    auctionEntityList() {
        return this._auctionEntityList
    }

    toJSON() {
        return {
            auctionEntityList: this.auctionEntityList().map(entity => entity.toJSON()),
            pagination: this.pagination().toJSON()
        }
    }
}