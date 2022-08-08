const mongoose = require("mongoose");

const SingleCartItemSchema = mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  amount: { type: Number, require: true },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
});

const OrderScema = mongoose.Schema(
  {
    tax: {
      type: Number,
      required: true,
    },
    shippingFee: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    cartItems: [SingleCartItemSchema],
    status: {
      type: String,
      enum: ["pending", "failed", "paid", "delivered", "canceled"],
      default: "pending",
    },
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    clientSecret: {
      type: String,
      required: true,
    },
    paymentIntentId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderScema);
