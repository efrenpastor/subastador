import { Repository } from '../../../domain'

export class LotRepository extends Repository {
    async getLotListByPostalCode() {
        throw new Error('[LotRepository#getLotListByPostalCode] should be implemented')
    }
}