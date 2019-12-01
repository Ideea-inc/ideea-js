const axios = require('axios')


/**
 * Groups
 * 
 */
var Groups = function () { }


// -----------------------------------------------------
// GROUPS
// -----------------------------------------------------

/**
 * groups/{group_id}
 *
 * @param {String} groupID
 * @returns {Promise} 
 */
Groups.prototype.get = function (groupID) {
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
Groups.prototype.update = function (groupID, group) {
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
Groups.prototype.getUsers = function (groupID) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/groups/${groupID}/users`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/users/invite
 *
 * @param {String} groupID
 * @param {Object} user
 *   @param {String} [user.first_name]
 *   @param {String} [user.last_name]
 *   @param {String} [user.email]
 * @returns {Promise}
 */
Groups.prototype.inviteUserToGroup = function (groupID, user) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}/users/invite`, user, {
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
 * @param {Object} userID
 * @returns {Promise}
 */
Groups.prototype.addUserToGroup = function (groupID, userID) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}/users/add`, { user_id: userID }, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/users/remove/{user_id}
 *
 * @param {String} groupID
 * @param {String} userID
 * @returns {Promise}
 */
Groups.prototype.removeUserFromGroup = function (groupID, userID) {
    return new Promise((resolve, reject) => {
        axios.delete(`${this.hostname}/groups/${groupID}/users/remove/${userID}`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/charges
 *
 * @param {String} groupID
 * @param {Object} opts
 *   @param {String} [opts.api]
 * @returns {Promise}
 */
Groups.prototype.getCharges = function (groupID, opts) {

    var params = {}
    if (opts.api) params.api = opts.api

    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/groups/${groupID}/charges`, {
            headers: this.getHeaders(),
            params,
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/charges/{charge_id}
 *
 * @param {String} groupID
 * @param {String} chargeID
 * @returns {Promise}
 */
Groups.prototype.getChargeByID = function (groupID, chargeID) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/groups/${groupID}/charges/${chargeID}`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


// -----------------------------------------------------
// CARDS
// -----------------------------------------------------

/**
 * groups/{group_id}/cards
 *
 * @param {String} groupID
 * @returns {Promise}
 */
Groups.prototype.getCards = function (groupID) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/groups/${groupID}/cards`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/cards/new
 * 
 * NOT FOR PUBLIC USE. DO NOT USE THIS.
 *
 * @param {String} groupID
 * @param {String} token
 * @returns {Promise}
 */
Groups.prototype.addCard = function (groupID, token) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}/cards/new`, { token }, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/cards/{card_id}/default
 *
 * @param {String} groupID
 * @param {String} cardID
 * @returns {Promise}
 */
Groups.prototype.setDefaultCard = function (groupID, cardID) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/groups/${groupID}/cards/${cardID}/default`, {}, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * groups/{group_id}/cards/{card_id}/delete
 *
 * @param {String} groupID
 * @param {String} cardID
 * @returns {Promise}
 */
Groups.prototype.deleteCard = function (groupID, cardID) {
    return new Promise((resolve, reject) => {
        axios.delete(`${this.hostname}/groups/${groupID}/cards/${cardID}/delete`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


module.exports = Groups
