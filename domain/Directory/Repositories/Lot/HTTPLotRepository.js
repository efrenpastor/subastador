import { AxiosFetcher } from '../../Fetchers/AxiosFetcher'
import { LotAPIToLotEntityMapper } from '../../Mappers/Lot/LotAPIToLotEntityMapper'
import { LotListAPIToLotListVOMapper } from '../../Mappers/Lot/LotListAPIToLotListVOMapper'
import { LotRepository } from './LotRepository'

export class HTTPLotRepository extends LotRepository {
    _fetcher
    _config

    // Mappers
    _lotAPIToLotEntityMapper
    _lotListAPIToLotListVOMapper

    static create({ config }) {
        const fetcher = AxiosFetcher.create({ config })
        const lotAPIToLotEntityMapper = LotAPIToLotEntityMapper.create()
        const lotListAPIToLotListVOMapper = LotListAPIToLotListVOMapper.create()
        return new HTTPLotRepository({
            fetcher,
            config,
            lotAPIToLotEntityMapper,
            lotListAPIToLotListVOMapper
        })
    }

    constructor({
        fetcher,
        config,
        lotAPIToLotEntityMapper,
        lotListAPIToLotListVOMapper
    }) {
        super()
        this._fetcher = fetcher
        this._config = config
        this._lotAPIToLotEntityMapper = lotAPIToLotEntityMapper
        this._lotListAPIToLotListVOMapper = lotListAPIToLotListVOMapper
    }

    async getLotListByPostalCode({ locationPC }) {
        try {
            const locationPCValue = locationPC.value()
            const api = this._config.get('API_URL')
            const endpoint = this._config.get('RESOURCES_URL').LOTS
            const url = `${api}${endpoint}?pc=${locationPCValue}`
            const { data } = await this._fetcher.get(url)
            return this._lotListAPIToLotListVOMapper.map(data)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    async getLotListByPostalCodes({ locationPCS }) {
        try {
            console.log(locationPCS)
            const locationPCSValue = locationPCS.map(locationPC => locationPC.value())
            const api = this._config.get('API_URL')
            const endpoint = this._config.get('RESOURCES_URL').LOTS
            const url = `${api}${endpoint}?pc=${locationPCSValue}`
            const { data } = await this._fetcher.get(url)
            return this._lotListAPIToLotListVOMapper.map(data)
        } catch (err) {
            return Promise.reject(err)
        }
    }
}