import { AxiosFetcher } from '../../Fetchers/AxiosFetcher'
import { LocationAPIToLocationEntityMapper } from '../../Mappers/Location/LocationAPIToLocationEntityMapper'
import { LocationListAPIToLocationListEntityMapper } from '../../Mappers/Location/LocationListAPIToLocationListEntityMapper'
import { LocationRepository } from './LocationRepository'

export class HTTPLocationRepository extends LocationRepository {
    _fetcher
    _config

    // Mappers
    _locationAPIToLocationEntityMapper
    _locationListAPIToLocationListEntityMapper

    static create({ config }) {
        const fetcher = AxiosFetcher.create({ config })
        const locationAPIToLocationEntityMapper = LocationAPIToLocationEntityMapper.create()
        const locationListAPIToLocationListEntityMapper = LocationListAPIToLocationListEntityMapper.create()
        return new HTTPLocationRepository({
            fetcher,
            config,
            locationAPIToLocationEntityMapper,
            locationListAPIToLocationListEntityMapper
        })
    }

    constructor({
        fetcher,
        config,
        locationAPIToLocationEntityMapper,
        locationListAPIToLocationListEntityMapper
    }) {
        super()
        this._fetcher = fetcher
        this._config = config
        this._locationAPIToLocationEntityMapper = locationAPIToLocationEntityMapper
        this._locationListAPIToLocationListEntityMapper = locationListAPIToLocationListEntityMapper
    }

    async getLocationList() {
        try {
            const api = this._config.get('API_URL')
            const endpoint = this._config.get('RESOURCES_URL').LOCATIONS
            const url = `${api}${endpoint}`
            const { data } = await this._fetcher.get(url)
            return this._locationListAPIToLocationListEntityMapper.map(data)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    async getLocationListByName({ locationName }) {
        try {
            const locationNameValue = locationName.value()
            const api = this._config.get('API_URL')
            const endpoint = this._config.get('RESOURCES_URL').LOCATIONS
            const url = `${api}${endpoint}?name=${locationNameValue}`
            const { data } = await this._fetcher.get(url)
            return this._locationListAPIToLocationListEntityMapper.map(data)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    async getLocationByName({ locationName }) {
        try {
            const locationNameValue = locationName.value()
            const api = this._config.get('API_URL')
            const endpoint = this._config.get('RESOURCES_URL').LOCATIONS
            const url = `${api}${endpoint}/${locationNameValue}`
            const { data } = await this._fetcher.get(url)
            return this._locationAPIToLocationEntityMapper.map(data)
        } catch (err) {
            return Promise.reject(err)
        }
    } 
}