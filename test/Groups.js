var { assert } = require('chai')
const Ideea = require('../src')


const GROUP_ID = ''
const OTHER_USER_ID = ''

var ideea = new Ideea('', {
    hostname: 'http://api.ideea.local/api/v1',
})


describe('Groups', () => {

    describe('Ideea.getGroup()', () => {
        it('Should return a single group', done => {
            ideea.getGroup(GROUP_ID).then(group => {
                assert.isObject(group)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.updateGroup()', () => {
        it('Should update a single group', done => {
            ideea.updateGroup(GROUP_ID, {
                name: 'test'
            }).then(group => {
                assert.isObject(group)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.getGroupUsers()', () => {
        it('Should get a groups users', done => {
            ideea.getGroupUsers(GROUP_ID).then(users => {
                assert.isArray(users)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.addUserToGroup()', () => {
        it('Add user to group', done => {
            ideea.addUserToGroup(GROUP_ID, OTHER_USER_ID, 'user').then(success => {
                assert.isObject(success)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.removeUserFromGroup()', () => {
        it('Remove user from group', done => {
            ideea.removeUserFromGroup(GROUP_ID, OTHER_USER_ID).then(success => {
                assert.isObject(success)
                done()
            }).catch(err => done(err))
        })
    })
})
