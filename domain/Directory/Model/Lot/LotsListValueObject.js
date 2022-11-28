import { Model } from "../../../domain";
import { PaginationValueObject } from "../PaginationValueObject";
import { LotEntity } from "./LotEntity";

export class LotsListValueObject extends Model {
    static create({ lotsEntityList, pagination }) {
        const { page, totalPages, totalResults } = pagination
        return new LotsListValueObject({
            lotsEntityList: lotsEntityList.map(entity => LotEntity.create(entity)),
            pagination: PaginationValueObject.create({
                page,
                totalPages,
                totalResults
            })
        })
    }

    constructor({ lotsEntityList, pagination }) {
        super()
        this._lotsEntityList = lotsEntityList
        this._pagination = pagination
    }

    pagination() {
        return this._pagination
    }

    lotsEntityList() {
        return this._lotsEntityList
    }

    toJSON() {
        return {
            lotsEntityList: this.lotsEntityList().map(entity => entity.toJSON()),
            pagination: this.pagination().toJSON()
        }
    }
}