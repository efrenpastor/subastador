import { Mapper } from "../../../domain"
import { CreditorEntity } from "../../Model/Creditor/CreditorEntity"

export class CreditorAPIToCreditorEntityMapper extends Mapper {
    static create() {
        return new CreditorAPIToCreditorEntityMapper()
    }

    map(rawAPIResponse) {
        return CreditorEntity.create(rawAPIResponse)
    }
}