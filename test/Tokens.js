var { assert } = require('chai')
const Ideea = require('../src')


const GROUP_ID = ''
const TOKEN_ID = ''


var ideea = new Ideea('', {
    hostname: 'http://api.ideea.local/api/v1',
})


describe('Tokens', () => {


    describe('Ideea.createApiKey()', () => {
        it('Should create a new access token', done => {
            ideea.createApiKey(GROUP_ID, {
                name: 'Test Key',
                password: 'password',
                expires: 'never',
            }).then(apiKey => {
                assert.isObject(apiKey)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.createEphemeralKey()', () => {
        it('Should get single bucket', done => {
            ideea.createEphemeralKey(GROUP_ID).then(apiKey => {
                assert.isObject(apiKey)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.createOneTimeUseKey()', () => {
        it('Should get single bucket', done => {
            ideea.createOneTimeUseKey(GROUP_ID).then(apiKey => {
                assert.isObject(apiKey)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.getApiKeys()', () => {
        it('Should get single bucket', done => {
            ideea.getApiKeys(GROUP_ID).then(apiKeys => {
                assert.isArray(apiKeys)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.deleteApiKey()', () => {
        it('Should delete api key', done => {
            ideea.deleteApiKey(GROUP_ID, TOKEN_ID).then(success => {
                assert.isObject(success)
                done()
            }).catch(err => done(err))
        })
    })
})
