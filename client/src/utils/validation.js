// client/src/utils/validation.js

export const isValidEmail = (email) => {
  // Basic email regex for client-side validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  // Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const isRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

export const matchesPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};
