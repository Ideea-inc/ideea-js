var { assert } = require('chai')
const Ideea = require('../src')

var ideea = new Ideea('', {
    hostname: 'http://api.ideea.local/api/v1',
})


describe('User', () => {

    describe('Ideea.getUser()', () => {
        it('Should return the current user', done => {
            ideea.getUser().then(group => {
                assert.isObject(group)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.updateUser()', () => {
        it('Should update the current user', done => {
            ideea.updateUser({
                first_name: 'john',
                last_name: 'smith',
            }).then(user => {
                assert.isObject(user)
                done()
            }).catch(err => done(err))
        })
    })
})
