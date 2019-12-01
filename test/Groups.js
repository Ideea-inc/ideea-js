var { assert } = require('chai')
const Ideea = require('../src')


const GROUP_ID = '2f8fdea3-b875-4926-90c8-5a1b11b818c8'
const OTHER_USER_ID = ''

var ideea = new Ideea('', {
    // hostname: 'http://api.ideea.local/api/v1',
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpZCI6ImFhMDhkZGUwLTFmM2EtNGJjOS1iZDM5LWJiODZlMzlkOTk0NiIsImVtYWlsIjoiYW50aG9ueWJ1ZGQ5NEBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiYW50aG9ueSIsImxhc3RfbmFtZSI6ImJ1ZGQiLCJkaXNwbGF5X25hbWUiOiJhbnRob255IGJ1ZGQiLCJwcm9maWxlX2ltYWdlIjoiaHR0cHM6Ly9hcGkuaWRlZWEuaW8vYXBpL3YxL3VzZXIvcHJvZmlsZS1pbWFnZS9hbnRob255JTIwYnVkZCIsInR5cGUiOiJ1c2VyIiwibGFzdF9sb2dpbl9hdCI6bnVsbCwiZGVsZXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMTktMDUtMThUMjA6MTA6MzIuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDE5LTA1LTE4VDIwOjEwOjMyLjAwMFoiLCJncm91cHMiOlt7ImlkIjoiOWU5OTk5NWYtNjYyOC00NTMxLWE5MDgtNmRiNzk5OGJkYWQ5Iiwicm9sZSI6ImFkbWluIn1dLCJKV1RfdHlwZSI6IlVTRVIiLCJpYXQiOjE1NTk0MjMwNTEsImV4cCI6MzExODkzMjUwMn0.SlSSiFKhfsiYUwYAMaCfyIHJ9kVP9ye1zFnMLC0yklwyYpsYruAqcaZ9deomxaYE4PTuDSKLB1imbozhQ4o7QYEnj4S-hPd0QdSkXmNwRyHjbdXxgZ2au9mimDyN86Fo7gOQg4cHcY_EVLoc0ZuLBcEtrT_ZKDMAInzLWCTCa6m9o6ttdqWiGYIrdmyMJLZg90s6KLgld3GEgLEu3PiutpAlcrsnpJAeAOs-YSmWYf6Nbry4EVKJeo-S5yl1If2OupZrQwu7k6wV6TO-hscqgCQC1bj1Ykw9xfSJo9INinIUETLSdwk3sZsSrugAsAiAyGQbCTiL2zZbfNVEoSjOGQ'
})


describe('Groups', () => {

    describe('Ideea.groups.get()', () => {
        it('Should return a single group', done => {
            ideea.groups.get(GROUP_ID).then(group => {
                assert.isObject(group)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.groups.update()', () => {
        it('Should update a single group', done => {
            ideea.groups.update(GROUP_ID, {
                name: 'test'
            }).then(group => {
                assert.isObject(group)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.groups.getUsers()', () => {
        it('Should get a groups users', done => {
            ideea.groups.getUsers(GROUP_ID).then(users => {
                assert.isArray(users)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.groups.addUserToGroupp()', () => {
        it('Add user to group', done => {
            ideea.groups.addUserToGroup(GROUP_ID, OTHER_USER_ID, 'user').then(success => {
                assert.isObject(success)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.groups.removeUserFromGroup()', () => {
        it('Remove user from group', done => {
            ideea.groups.removeUserFromGroup(GROUP_ID, OTHER_USER_ID).then(success => {
                assert.isObject(success)
                done()
            }).catch(err => done(err))
        })
    })
})
