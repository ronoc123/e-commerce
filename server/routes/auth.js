const express = require("express")
const router = express.Router()
const {
    register,
    login,
    logOut,
} = require('../controllers/auth')

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/logout').get(logOut)


module.exports = router