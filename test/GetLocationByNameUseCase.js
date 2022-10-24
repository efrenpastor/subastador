import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import { AxiosFetcher } from '../domain/Directory/Fetchers/AxiosFetcher'

import { Domain } from '../domain'
import { InvalidLocationName } from '../domain/Directory/Errors/Location/InvalidLocationName'
import getLocationByNameUseCaseResponse from './fixtures/getLocationByNameUseCaseResponse'

// Allos try/catching async errors rejected from promises
chai.use(chaiAsPromised)

let domain
let fetcher
let stubedGet

describe('GetLocationByNameUseCase', function () {
    beforeEach(function () {
        domain = Domain.create()
        fetcher = AxiosFetcher.create()
        stubedGet = sinon.stub(fetcher, 'get')
    })

    afterEach(function () {
        domain = undefined
        fetcher = undefined
        stubedGet.restore()
    })

    it('gets a location by provided Name', async function () {
        const locationName = 'Gandía'
        const resolved = new Promise((r) => r({ DATA: getLocationByNameUseCaseResponse }))
        stubedGet.returns(resolved)
        const data = await domain.GetLocationByNameUseCase.execute({ locationName })

        expect(data).to.deep.equal(getLocationByNameUseCaseResponse)
    })

    it('throws an InvalidLocationName Error if provided LocationName has the wrong type', async function () {
        const locationName = 123
        await expect(
            domain.GetLocationByNameUseCase.execute({ locationName })
        ).to.be.rejectedWith(InvalidLocationName)
    })
})