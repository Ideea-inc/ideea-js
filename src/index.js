const axios = require('axios')


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
        hostname: 'https://api.ideea.co.uk/api/v1',
        accessToken: false,
        apiKey: apiKey
    }, opts)
}


// -----------------------------------------------------
// Misc
// -----------------------------------------------------

/**
 * .getHeaders()
 *
 * @returns {Array} 
 */
Ideea.prototype.getHeaders = function () {
    var headers = {}
    if (this.apiToken) headers['X-Api-Token'] = this.apiToken
    if (this.accessToken) headers['Authorization'] = 'Bearer ' + this.accessToken
    return headers
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
 * @returns {Promise} 
 */
Ideea.prototype.login = function (email, password) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/auth/login`, {
            email,
            password,
        })
        .then(({ data }) => {
            this.accessToken = data.access_token
            resolve(data)
        })
        .catch(err => reject(err))
    })
}


// -----------------------------------------------------
// GROUPS
// -----------------------------------------------------

/**
 * groups/{group_id}
 *
 * @param {String} groupID
 * @returns {Promise} 
 */
Ideea.prototype.getGroup = function (groupID) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/groups/${groupID}`, {
            headers: this.getHeaders()
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}
 *
 * @param {String} groupID
 * @param {Object} group
 *   @param {String} [group.name]
 * @returns {Promise} 
 */
Ideea.prototype.updateGroup = function (groupID, group) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}`, group, {
            headers: this.getHeaders()
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/users
 *
 * @param {String} groupID
 * @returns {Promise} 
 */
Ideea.prototype.getGroupUsers = function (groupID) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/groups/${groupID}/users`, {
            headers: this.getHeaders()
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/users/add
 *
 * @param {String} groupID
 * @param {String} userID
 * @param {String} role user | admin
 * @returns {Promise} 
 */
Ideea.prototype.addUserToGroup = function (groupID, userID, role) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}/users/add`, {
            user_id: userID,
            role: role,
        }, {
            headers: this.getHeaders()
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/users/remove
 *
 * @param {String} groupID
 * @param {String} userID
 * @returns {Promise}
 */
Ideea.prototype.removeUserFromGroup = function (groupID, userID) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}/users/remove`, {
            user_id: userID
        }, {
            headers: this.getHeaders()
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
}


// -----------------------------------------------------
// API Keys
// -----------------------------------------------------

/**
 * /groups/{groupID}/tokens
 *
 * @param {String} groupID
 * @returns {Promise} 
 */
Ideea.prototype.getApiKeys = function (groupID) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/groups/${groupID}/tokens`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}

/**
 * /groups/${groupID}/tokens/create
 *
 * @param {String} groupID
 * @param {Object} apiKey key
 *   @param {String} [apiKey.name] email
 *   @param {String} [apiKey.password] password
 *   @param {String} [apiKey.expires] expires
 * @returns {Promise} 
 */
Ideea.prototype.createApiKey = function (groupID, apiKey) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}/tokens/create`, apiKey, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err));
    });
}


/**
 * /groups/${groupID}/tokens/create/ephemeral
 *
 * @param {String} groupID
 * @param {Object} apiKey key
 *   @param {String} [apiKey.name] email
 *   @param {String} [apiKey.password] password
 *   @param {String} [apiKey.expires] expires
 * @returns {Promise} 
 */
Ideea.prototype.createEphemeralKey = function (groupID, apiKey) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}/tokens/create/ephemeral`, apiKey, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err));
    });
}


/**
 * /groups/${groupID}/tokens/create/one-time
 *
 * @param {String} groupID
 * @returns {Promise} 
 */
Ideea.prototype.createOneTimeUseKey = function (groupID) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}/tokens/create/one-time`, {}, {
            headers: this.getHeaders()
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
}


/**
 * /groups/${groupID}/tokens/{apiKeyID}/delete
 *
 * @param {String} groupID
 * @param {String} apiKeyID
 * @returns {Promise} 
 */
Ideea.prototype.deleteApiKey = function (groupID, apiKeyID) {
    return new Promise((resolve, reject) => {
        axios.delete(`${this.hostname}/groups/${groupID}/tokens/${apiKeyID}/delete`, {
            headers: this.getHeaders()
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
}


// -----------------------------------------------------
// USER
// -----------------------------------------------------

/**
 * /user
 *
 * @returns {Promise} 
 */
Ideea.prototype.getUser = function () {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/user`, {
            headers: this.getHeaders()
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
}


/**
 * /user
 *
 * @param {Object} user Options
 *   @param {String} [user.first_name]
 *   @param {String} [user.last_name]
 * @returns {Promise} 
 */
Ideea.prototype.updateUser = function (user) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/user`, user, {
            headers: this.getHeaders()
        })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
}


module.exports = Ideea
