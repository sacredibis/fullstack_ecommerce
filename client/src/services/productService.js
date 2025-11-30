import api from './api';

const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

const productService = {
  getProducts,
  getProductById,
};

export default productService;
