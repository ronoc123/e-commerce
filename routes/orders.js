const express = require('express')
const router = express.Router()

const { authenticateUser, authorizePermissions } = require('../middleware/authentication')

const {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder,
} = require('../controllers/Orders')


router.route('/')
    .post(authenticateUser, createOrder)
    .get(authenticateUser, authorizePermissions('admin'), getAllOrders)

router.route('/showAllOrders').get(authenticateUser, getCurrentUserOrders)

router.route('/:id').get(authenticateUser, getSingleOrder).patch(authenticateUser, updateOrder)


module.exports = router