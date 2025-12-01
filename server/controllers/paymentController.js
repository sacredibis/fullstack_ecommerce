// server/controllers/paymentController.js
import asyncHandler from 'express-async-handler';
import stripe from '../config/stripe.js';

// @desc    Create a payment intent
// @route   POST /api/payment/create-intent
// @access  Private
const createPaymentIntent = asyncHandler(async (req, res) => {
  const { items } = req.body;

  // In a real application, you would calculate the total amount from the items
  // and not trust the client to provide the amount.
  const amount = 1099; // Example amount in cents

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

export { createPaymentIntent };
