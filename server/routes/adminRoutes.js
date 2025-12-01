// server/routes/adminRoutes.js
import express from 'express';
const router = express.Router();
import {
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  getOrders,
} from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/users').get(protect, admin, getUsers);
router
  .route('/users/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
router.route('/orders').get(protect, admin, getOrders);

export default router;
