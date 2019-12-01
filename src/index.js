const axios = require('axios')

const Groups = require('./Groups')
const User = require('./User')
const IAM = require('./IAM')


/**
 * Ideea
 * 
 * @param {String} apiKey
 * @param {Object} opts options
 *   @param {String} [opts.hostname] 
 *   @param {String} [opts.accessToken] 
 */
var Ideea = function (apiKey, opts = {}) {
    Object.assign(this, {
        apiKey,
        accessToken: false,
        hostname: 'https://api.ideea.io/api/v1',
    }, opts)


    var base = {
        apiKey,
        accessToken: this.accessToken,
        hostname: this.hostname,
        getHeaders: function () {
            var headers = {}

            if (this.apiKey) {
                headers['X-Api-Token'] = this.apiKey
            }

            if (this.accessToken) {
                headers['Authorization'] = 'Bearer ' + this.accessToken
            }

            return headers
        }
    }


    this.getHeaders = base.getHeaders
    this.groups = Object.assign(new Groups(), base)
    this.user = Object.assign(new User(), base)
    this.IAM = Object.assign(new IAM(), base)
}


// -----------------------------------------------------
// Auth
// -----------------------------------------------------

/**
 * /auth
 *
 * @returns {Promise} 
 */
Ideea.prototype.authCheck = function () {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/auth`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * /auth/login
 *
 * @param {String} email
 * @param {String} password
 * @param {String} token MFA Token
 * @returns {Promise} 
 */
Ideea.prototype.login = function (email, password, token) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/auth/login`, {
            email,
            password,
            token,
        })
            .then(({ data }) => {
                this.accessToken = data.access_token
                resolve(data)
            })
            .catch(err => reject(err))
    })
}


module.exports = Ideea
