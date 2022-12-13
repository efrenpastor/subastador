import { Mapper } from "../../../domain"
import { AuctionEntity } from "../../Model/Auction/AuctionEntity"

export class AuctionAPIToAuctionEntityMapper extends Mapper {
    static create() {
        return new AuctionAPIToAuctionEntityMapper()
    }

    map(rawAPIResponse) {
        return AuctionEntity.create(rawAPIResponse)
    }
}