const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

const {
    createReview,
    updateReview,
    getAllReviews,
    deleteReview,
    getSingleReview,
} = require('../controllers/Reviews')


router.route('/').post(authenticateUser, createReview).get(getAllReviews)

router.route('/:id')
    .get(getSingleReview)
    .patch(authenticateUser, updateReview)
    .delete(authenticateUser, deleteReview)



module.exports = router