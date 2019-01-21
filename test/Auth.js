var { assert } = require('chai')
const Ideea = require('../src')


var ideea = new Ideea('', {
    hostname: 'http://api.ideea.local/api/v1',
})

describe('Auth', () => {

    describe('Ideea.authCheck()', () => {
        it('Should check auth status', done => {
            ideea.authCheck()
                .then(auth => {
                    assert.isObject(auth)
                    done()
                }).catch(err => done(err.response.data))
        })
    })

    describe('Ideea.login()', () => {
        it('Should get a new access token', done => {
            ideea.login('anthonybudd@ideea.co.uk', 'password')
                .then(auth => {
                    assert.isObject(auth)
                    done()
                }).catch(err => done(err))
        })
    })
    
})
