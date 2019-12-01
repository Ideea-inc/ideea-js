const axios = require('axios')


/**
 * IAM
 *  
 */
var IAM = function () { }

// -----------------------------------------------------
// IAM
// -----------------------------------------------------

/**
 * /iam/group/{group_id}/system-accounts
 *
 * @param {String} groupID
 * @returns {Promise} 
 */
IAM.prototype.getSystemAccounts = function (groupID) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/iam/group/${groupID}/system-accounts`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * /iam/group/{group_id}/system-accounts/create
 *
 * @param {String} groupID
 * @param {Object} systemAccount
 *   @param {String} [systemAccount.name]
 *   @param {Array}  [systemAccount.permissions]
 *   @param {String} [systemAccount.password]
 * @returns {Promise} 
 */
IAM.prototype.createSystemAccount = function (groupID, systemAccount) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/iam/group/${groupID}/system-accounts/create`, systemAccount, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * /iam/group/{group_id}/system-accounts/{system_account_id}
 *
 * @param {String} groupID
 * @param {String} systemAccountID
 * @returns {Promise} 
 */
IAM.prototype.getSystemAccount = function (groupID, systemAccountID) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.hostname}/iam/group/${groupID}/system-accounts/${systemAccountID}`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * /iam/group/{group_id}/system-accounts/{system_account_id}/api-keys/create
 *
 * @param {String} groupID
 * @param {String} systemAccountID
 * @param {Object} apiKey
 *   @param {String} [apiKey.name]
 *   @param {Array}  [apiKey.expires]
 *   @param {String} [apiKey.password]
 * @returns {Promise} 
 */
IAM.prototype.createApiKey = function (groupID, systemAccountID, apiKey) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/iam/group/${groupID}/system-accounts/${systemAccountID}/api-keys/create`, apiKey, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * /iam/group/{group_id}/system-accounts/{system_account_id}/api-keys/{api_key_id}/delete
 *
 * @param {String} groupID
 * @param {String} systemAccountID
 * @param {String} apiKeyID
 * @returns {Promise} 
 */
IAM.prototype.deleteApiKey = function (groupID, systemAccountID, apiKeyID) {
    return new Promise((resolve, reject) => {
        axios.delete(`${this.hostname}/iam/group/${groupID}/system-accounts/${systemAccountID}/api-keys/${apiKeyID}/delete`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * /iam/group/{group_id}/system-accounts/{system_account_id}/delete
 *
 * @param {String} groupID
 * @param {String} systemAccountID
 * @returns {Promise} 
 */
IAM.prototype.deleteSystemAccount = function (groupID, systemAccountID) {
    return new Promise((resolve, reject) => {
        axios.delete(`${this.hostname}/iam/group/${groupID}/system-accounts/${systemAccountID}/delete`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


/**
 * /iam/group/{group_id}/account/{account_id}/update-permissions
 *
 * @param {String} groupID
 * @param {String} accountID
 * @returns {Promise} 
 */
IAM.prototype.updateUserPermissions = function (groupID, accountID) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/iam/group/${groupID}/account/${accountID}/update-permissions`, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}

module.exports = IAM
