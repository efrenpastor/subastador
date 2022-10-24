import { Repository } from '../../../domain'

export class LocationRepository extends Repository {
    async getLocationByName() {
        throw new Error('[LocationRepository#getLocationByName] should be implemented')
    }
} 
