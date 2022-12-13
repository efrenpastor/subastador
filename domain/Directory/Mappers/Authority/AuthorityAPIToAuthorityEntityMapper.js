import { Mapper } from "../../../domain"
import { AuthorityEntity } from "../../Model/Authority/AuthorityEntity"

export class AuthorityAPIToAuthorityEntityMapper extends Mapper {
    static create() {
        return new AuthorityAPIToAuthorityEntityMapper()
    }

    map(rawAPIResponse) {
        return AuthorityEntity.create(rawAPIResponse)
    }
}