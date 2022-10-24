import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import { AxiosFetcher } from '../domain/Directory/Fetchers/AxiosFetcher'

import { Domain } from '../domain'
import getLocationListUseCaseResponse from './fixtures/getLocationListUseCaseResponse'

// Allos try/catching async errors rejected from promises
chai.use(chaiAsPromised)

let domain
let fetcher
let stubedGet

describe('GetLocationListUseCase', function () {
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

    it('gets location list unfiltered', async function () {
        const resolved = new Promise((r) => r({ DATA: getLocationListUseCaseResponse }))
        stubedGet.returns(resolved)
        const data = await domain.GetLocationListUseCase.execute()

        expect(data).to.deep.equal(getLocationListUseCaseResponse)
    })
})