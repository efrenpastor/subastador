import { AuthorityEntity } from "../../Model/Auction/AuthorityEntity"

export class AuthorityAPIToAuthorityEntityMapper extends Mapper {
    static create() {
        return new AuthorityAPIToAuthorityEntityMapper()
    }

    map(rawAPIResponse) {
        return AuthorityEntity.create(rawAPIResponse)
    }
}