import api from './api';

const createPaymentIntent = async (items) => {
  const response = await api.post('/payment/create-intent', { items });
  return response.data;
};

const paymentService = {
  createPaymentIntent,
};

export default paymentService;
