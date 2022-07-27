const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'please provide a product name.'],
    },
    price: {
        type: Number,
        required: [true, 'please provide a price.'],
        default: 0,
    },
    description: {
        type: String,
        required: [true, 'Please provide a short description of the product.'],
        maxlength: [1000, "Cannot bemore than 1000 characters."],
    },
    image: {
        type: String,
        default:'/uploads/example.jpeg',
        required: [true, 'please provide image.'],
    },
    category: {
        type: String,
        required: [true, 'please provide product category.'],
        enum:['office', 'kitchen', 'bedroom'],
    },
    company: {
        type: String,
        required: [true, 'please provide a company.'],
        enum: {
            values:['ikea', 'liddy', 'marcos'],
            message: '{VALUE} is not supported.'
        }
    },
    color: {
        type: [String],
        default:['#222'],
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    freeShipping: {
        type: Boolean,
        default: false,
    },
    inventory: {
        type: Number,
        required: true,
        default: 15,
    },
    averageRating: {
        type: Number,
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:'User',
        required: true,
    }, 
    }, 
{ timestamps: true, toJSON:{virtuals:true}, toObject: { virtuals: true } }
);

ProductSchema.virtual('reviews', {
    ref:'Review',
    localField: '_id',
    foreignField:'product',
    justOne: false,
    // match : { rating: 5 },
})


ProductSchema.pre('remove', async function (next){
    await this.model('Review').deleteMany({ product: this._id })
})

module.exports = mongoose.model('Product', ProductSchema)