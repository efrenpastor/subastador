import { CreditorEntity } from "../../Model/Auction/CreditorEntity"

export class CreditorAPIToCreditorEntityMapper extends Mapper {
    static create() {
        return new CreditorAPIToCreditorEntityMapper()
    }

    map(rawAPIResponse) {
        return CreditorEntity.create(rawAPIResponse)
    }
}