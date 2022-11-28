import { PaginationValueObject } from "../PaginationValueObject";
import { CreditorEntity } from "./CreditorEntity";

export class CreditorListValueObject extends Model {
    static create({ creditorEntityList, pagination }) {
        const { page, totalPages, totalResults } = pagination
        return new CreditorListValueObject({
            creditorEntityList: creditorEntityList.map(entity => CreditorEntity.create(entity)),
            pagination: PaginationValueObject.create({
                page,
                totalPages,
                totalResults
            })
        })
    }

    constructor({ creditorEntityList, pagination }) {
        super()
        this._creditorEntityList = creditorEntityList
        this._pagination = pagination
    }

    pagination() {
        return this._pagination
    }

    creditorEntityList() {
        return this._creditorEntityList
    }

    toJSON() {
        return {
            creditorEntityList: this.creditorEntityList().map(entity => entity.toJSON()),
            pagination: this.pagination.toJSON()
        }
    }
}