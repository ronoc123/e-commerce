const Product = require("../models/products");
const { StatusCodes } = require("http-status-codes");
const customError = require("../errors");
const { checkPermissions } = require("../utils");
const Order = require("../models/Order");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const createOrder = async (req, res) => {
  const { items: cartItems, tax, shippingFee } = req.body;

  if (!cartItems || cartItems.length < 1) {
    throw new customError.BadRequestError("No Cart Items Provided!");
  }

  if (!tax || !shippingFee) {
    throw new customError.BadRequestError(
      "Please provide tax and shipping fee."
    );
  }

  let orderItems = [];
  let subtotal = 0;

  for (const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.id });
    if (!dbProduct) {
      throw new customError.NotFoundError(`No product with id: ${item.id}`);
    }
    const { name, price, image, _id } = dbProduct;
    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image,
      _id,
    };
    // Add item to order
    orderItems = [...orderItems, singleOrderItem];
    // calculate subtotal
    subtotal += price * item.amount;
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: orderItems.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price,
        },
        quantity: item.amount,
      };
    }),
    success_url: `${process.env.SERVER_URL}/checkout`,
    cancel_url: `${process.env.SERVER_URL}`,
  });
  console.log(req.user.userId);

  const order = await Order.create({
    orderItems,
    total: subtotal,
    subtotal,
    tax,
    shippingFee,
    paymmentIntent: session.paymmentIntent,
    clientSecret: "fakeClientSecret",
    user: req.user.userId,
  });

  res.status(StatusCodes.OK).json({ url: session.url });
};
const getAllOrders = async (req, res) => {
  res.send("Get all orders.");
};

const getSingleOrder = async (req, res) => {
  res.send("Get 1 order.");
};

const getCurrentUserOrders = async (req, res) => {
  res.send("Get all orders.");
};

const updateOrder = async (req, res) => {
  res.send("Update single order.");
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
