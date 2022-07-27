
const { custom } = require('joi')
const customError = require('../errors')
const user = require('../models/user')
const { isTokenValid } = require('../utils')


const authenticateUser = async (req, res, next) => {
    const token = req.signedCookies.token

    if(!token) {
        throw new customError.UnauthenticatedError('Unauthorized.')
    }   

    try {
        const { name, userId, role } = isTokenValid({ token });
        req.user = { name, userId, role };
        next()
    } catch (error) {
        throw new customError.UnauthenticatedError('Authentication Invalid.')
    }
}

const authorizePermissions = (...role) => {
    return (req, res, next) => {
        if(!role.includes(req.user.role)) {
            throw new customError.UnathorizedError('Unauthorized to access this route.')
        }
        next();
    }
}


module.exports = {
    authenticateUser,
    authorizePermissions,
}