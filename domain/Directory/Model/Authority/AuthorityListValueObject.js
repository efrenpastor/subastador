import { PaginationValueObject } from "../PaginationValueObject";
import { AuthorityEntity } from "./AuthorityEntity";

export class AuthorityListValueObject extends Model {
    static create({ authorityEntityList, pagination }) {
        const { page, totalPages, totalResults } = pagination
        return new AuthorityListValueObject({
            authorityEntityList: authorityEntityList.map(entity => AuthorityEntity.create(entity)),
            pagination: PaginationValueObject.create({
                page,
                totalPages,
                totalResults
            })
        })
    }

    constructor({ authorityEntityList, pagination }) {
        super()
        this._authorityEntityList = authorityEntityList
        this._pagination = pagination
    }

    pagination() {
        return this._pagination
    }

    authorityEntityList() {
        return this._authorityEntityList
    }

    toJSON() {
        return {
            authorityEntityList: this.authorityEntityList().map(entity => entity.toJSON()),
            pagination: this.pagination.toJSON()
        }
    }
}