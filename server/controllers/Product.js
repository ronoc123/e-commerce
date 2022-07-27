const Product = require('../models/products')
const customError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const path = require('path')


const createProduct = async (req, res) => {
    req.body.user = req.user.userId
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({ product })
}
const getAllProducts = async (req, res) => {

    const products = await Product.find({})

    res.status(StatusCodes.OK).json({ count: products.length, products })
}
const getSingleProduct = async (req, res) => {
    const { id: productId } = req.params

    const product = await Product.findOne({ _id: productId }).populate('reviews')
    if(!product) {
        throw new customError.BadRequestError(`No product with the id: ${productId}`)
    }

    res.status(StatusCodes.OK).json({ product })
}
const updateProduct = async (req, res) => {
    const { id: productId } = req.params

    const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
        new:true,
        runValidators: true,
    })
    if(!product) {
        throw new customError.BadRequestError(`No product with the id: ${productId}`)
    }

    res.status(StatusCodes.OK).json({ product })
}
const deleteProduct = async (req, res) => {
    const { id: productId } = req.params

    const product = await Product.findOne({ _id: productId })
    if(!product) {
        throw new customError.BadRequestError(`No product with the id: ${productId}`)
    }
    await product.remove()
    res.status(StatusCodes.OK).json({ msg: "Product deleted." })
}
const uploadImage = async (req, res) => {
    if(!req.files){
        throw new customError.BadRequestError("Please upload and Image.")
    }

    const productImage = req.files.image
    
    if(!productImage.mimetype.startsWith('image')) {
        throw new customError.BadRequestError("Please upload Image.")
    }

    const maxSize = 1024 * 1024

    if(productImage.size > maxSize) {
        throw new customError.BadRequestError("Please upload a smaller image.")
    }

    const imagePath = path.join(__dirname, `../public/uploads/` + `${productImage.name}`)
    await productImage.mv(imagePath)
    
    res.status(StatusCodes.OK).json({image: `/uploads/${productImage.name}`})
}

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage,
}