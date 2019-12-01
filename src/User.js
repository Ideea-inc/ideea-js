const axios = require('axios')


/**
 * User
 * 
 */
var User = function () { }


// -----------------------------------------------------
// USER
// -----------------------------------------------------

/**
 * /user
 *
 * @returns {Promise} 
 */
User.prototype.get = function () {
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
User.prototype.update = function (user) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.hostname}/user`, user, {
            headers: this.getHeaders()
        })
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
}


module.exports = User
