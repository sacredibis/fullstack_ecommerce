// server/routes/paymentRoutes.js
import express from 'express';
const router = express.Router();
import { createPaymentIntent } from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/create-intent').post(protect, createPaymentIntent);

export default router;
