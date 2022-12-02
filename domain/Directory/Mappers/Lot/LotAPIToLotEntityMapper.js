import { LotEntity } from '../../Model/Lot/LotEntity'
import { AuctionAPIToAuctionEntityMapper } from '../../Mappers/Auction/AuctionAPIToAuctionEntityMapper'
import { AuthorityAPIToAuthorityEntityMapper } from '../../Mappers/Authority/AuthorityAPIToAuthorityEntityMapper'
import { CreditorAPIToCreditorEntityMapper } from '../../Mappers/Creditor/CreditorAPIToCreditorEntityMapper'

export class LotAPIToLotEntityMapper extends Mapper {
    _auctionAPIToAuctionEntityMapper
    _authorityAPIToAuthorityEntityMapper
    _creditorAPIToCreditorEntityMapper

    static create({ config }) {
        const auctionAPIToAuctionEntityMapper = AuctionAPIToAuctionEntityMapper.create()
        const authorityAPIToAuthorityEntityMapper = AuthorityAPIToAuthorityEntityMapper.create()
        const creditorAPIToCreditorEntityMapper = CreditorAPIToCreditorEntityMapper.create()
        return new LotAPIToLotEntityMapper({
            config,
            auctionAPIToAuctionEntityMapper,
            authorityAPIToAuthorityEntityMapper,
            creditorAPIToCreditorEntityMapper
        })
    }

    constructor({
        config,
        auctionAPIToAuctionEntityMapper,
        authorityAPIToAuthorityEntityMapper,
        creditorAPIToCreditorEntityMapper
    }) {
        super()
        this._config = config
        this._auctionAPIToAuctionEntityMapper = auctionAPIToAuctionEntityMapper
        this._authorityAPIToAuthorityEntityMapper = authorityAPIToAuthorityEntityMapper
        this._creditorAPIToCreditorEntityMapper = creditorAPIToCreditorEntityMapper
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