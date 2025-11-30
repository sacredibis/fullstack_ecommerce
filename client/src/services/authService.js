import api from './api';

const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

const logout = async () => {
  // Depending on your backend, you might want to call a logout endpoint
  // For JWT, you might just remove the token from local storage
  localStorage.removeItem('token');
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
