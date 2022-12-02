import { LotEntity } from '../../Model/Lot/LotEntity'
import { AuctionAPIToAuctionEntityMapper } from '../../Mappers/Auction/AuctionAPIToAuctionEntityMapper'
import { AuthorityAPIToAuthorityEntityMapper } from '../../Mappers/Authority/AuthorityAPIToAuthorityEntityMapper'
import { CreditorAPIToCreditorEntityMapper } from '../../Mappers/Creditor/CreditorAPIToCreditorEntityMapper'

export class LotAPIToLotEntityMapper extends Mapper {
    _auctionAPIToAuctionEntityMapper
    _authorityAPIToAuthorityEntityMapper
    _creditorAPIToCreditorEntityMapper

    static create() {
        this._auctionAPIToAuctionEntityMapper = AuctionAPIToAuctionEntityMapper.create()
        this._authorityAPIToAuthorityEntityMapper = AuthorityAPIToAuthorityEntityMapper.create()
        this._creditorAPIToCreditorEntityMapper = CreditorAPIToCreditorEntityMapper.create()
        return new LotAPIToLotEntityMapper()
    }

    map(rawAPIResponse) {
        const {
            id,
            source,
            descripcion,
            address,
            postal_code,
            locality,
            province,
            main_residence,
            ownership,
            visitable,
            bid,
            category,
            auction,
            authority,
            creditor
        } = rawAPIResponse
        const auctionEntity = this._auctionAPIToAuctionEntityMapper.map(auction)
        const authorityEntity = this._authorityAPIToAuthorityEntityMapper.map(authority)
        const creditorEntity = this._creditorAPIToCreditorEntityMapper.map(creditor)

        return LotEntity.create({
            id,
            source,
            descripcion,
            address,
            postal_code,
            locality,
            province,
            main_residence,
            ownership,
            visitable,
            bid,
            category,
            auction: auctionEntity,
            authority: authorityEntity,
            creditor: creditorEntity
        })
    }
}