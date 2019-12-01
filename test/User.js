var { assert } = require('chai')
const Ideea = require('../src')

var ideea = new Ideea('', {
    // hostname: 'http://api.ideea.local/api/v1',
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpZCI6ImFhMDhkZGUwLTFmM2EtNGJjOS1iZDM5LWJiODZlMzlkOTk0NiIsImVtYWlsIjoiYW50aG9ueWJ1ZGQ5NEBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiYW50aG9ueSIsImxhc3RfbmFtZSI6ImJ1ZGQiLCJkaXNwbGF5X25hbWUiOiJhbnRob255IGJ1ZGQiLCJwcm9maWxlX2ltYWdlIjoiaHR0cHM6Ly9hcGkuaWRlZWEuaW8vYXBpL3YxL3VzZXIvcHJvZmlsZS1pbWFnZS9hbnRob255JTIwYnVkZCIsInR5cGUiOiJ1c2VyIiwibGFzdF9sb2dpbl9hdCI6bnVsbCwiZGVsZXRlZF9hdCI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMTktMDUtMThUMjA6MTA6MzIuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDE5LTA1LTE4VDIwOjEwOjMyLjAwMFoiLCJncm91cHMiOlt7ImlkIjoiOWU5OTk5NWYtNjYyOC00NTMxLWE5MDgtNmRiNzk5OGJkYWQ5Iiwicm9sZSI6ImFkbWluIn1dLCJKV1RfdHlwZSI6IlVTRVIiLCJpYXQiOjE1NTk0MjMwNTEsImV4cCI6MzExODkzMjUwMn0.SlSSiFKhfsiYUwYAMaCfyIHJ9kVP9ye1zFnMLC0yklwyYpsYruAqcaZ9deomxaYE4PTuDSKLB1imbozhQ4o7QYEnj4S-hPd0QdSkXmNwRyHjbdXxgZ2au9mimDyN86Fo7gOQg4cHcY_EVLoc0ZuLBcEtrT_ZKDMAInzLWCTCa6m9o6ttdqWiGYIrdmyMJLZg90s6KLgld3GEgLEu3PiutpAlcrsnpJAeAOs-YSmWYf6Nbry4EVKJeo-S5yl1If2OupZrQwu7k6wV6TO-hscqgCQC1bj1Ykw9xfSJo9INinIUETLSdwk3sZsSrugAsAiAyGQbCTiL2zZbfNVEoSjOGQ'
})


describe('User', () => {

    describe('Ideea.getUser()', () => {
        it('Should return the current user', done => {
            ideea.user.get().then(group => {
                assert.isObject(group)
                done()
            }).catch(err => done(err))
        })
    })

    describe('Ideea.updateUser()', () => {
        it('Should update the current user', done => {
            ideea.user.update({
                first_name: 'john',
                last_name: 'smith',
            }).then(user => {
                assert.isObject(user)
                done()
            }).catch(err => done(err))
        })
    })
})
