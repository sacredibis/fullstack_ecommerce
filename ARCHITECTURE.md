# Full-Stack E-Commerce Application Documentation

## Project Overview

This is a full-stack e-commerce application built with a React frontend and Node.js/Express backend. The application supports user authentication, product browsing, shopping cart functionality, checkout with payment processing, and admin management features.

---

## Root Level Files

### `.gitignore`
Specifies files and directories that Git should ignore (node_modules, .env files, build artifacts, etc.).

### `package.json`
Root package configuration file that may contain workspace configuration or scripts for managing both client and server.

### `package-lock.json`
Automatically generated file that locks dependency versions for consistent installations across environments.

### `README.md`
Main project documentation file containing setup instructions, project description, and usage guidelines.


---

## Client Directory (`/client`)

The frontend React application that users interact with.

### Root Configuration Files

#### `.env`
Environment variables for the client (API URLs, public keys, feature flags).

#### `.gitignore`
Client-specific Git ignore rules.

#### `package.json`
Client dependencies and scripts (React, React Router, Axios, Tailwind CSS, etc.).

#### `postcss.config.js`
PostCSS configuration for processing CSS (used by Tailwind CSS).

#### `tailwind.config.js`
Tailwind CSS configuration file defining custom colors, themes, and utility classes.

### Public Directory (`/client/public`)

Static assets served directly without processing.

#### `favicon.ico`
Browser tab icon for the application.

#### `index.html`
Main HTML template - entry point for the React application. Contains the root `<div>` where React mounts.

### Source Directory (`/client/src`)

Main application source code.

#### `index.js`
Entry point for the React application. Renders the App component and sets up providers.

#### `index.css`
Global CSS styles and Tailwind CSS imports.

#### `App.jsx`
Root React component that sets up routing, global context providers, and layout structure.

---

## Components (`/client/src/components`)

Reusable React components organized by feature.

### Admin Components (`/client/src/components/admin`)

Admin-only interface components.

#### `AdminDashboard.jsx`
Main admin dashboard displaying overview statistics, recent orders, and quick actions.

#### `AdminRoute.jsx`
Protected route component that restricts access to admin users only.

#### `OrderManagement.jsx`
Interface for viewing, updating, and managing customer orders (status updates, tracking, refunds).

#### `ProductManagement.jsx`
CRUD interface for managing products (add, edit, delete, update inventory).

### Auth Components (`/client/src/components/auth`)

Authentication-related components.

#### `Login.jsx`
Login form component with email/password fields and OAuth options.

#### `Register.jsx`
User registration form with validation for creating new accounts.

#### `PrivateRoute.jsx`
Protected route wrapper that redirects unauthenticated users to login.

### Cart Components (`/client/src/components/cart`)

Shopping cart functionality.

#### `Cart.jsx`
Main cart component displaying all items and checkout button.

#### `CartItem.jsx`
Individual cart item component showing product details, quantity selector, and remove button.

#### `CartSummary.jsx`
Cart totals component displaying subtotal, taxes, shipping, and total price.

### Checkout Components (`/client/src/components/checkout`)

Multi-step checkout process components.

#### `CheckoutForm.jsx`
Main checkout form container managing the checkout flow.

#### `ShippingForm.jsx`
Shipping address collection form with validation.

#### `PaymentForm.jsx`
Payment information form integrated with Stripe (card details, billing address).

### Common Components (`/client/src/components/common`)

Shared UI components used throughout the application.

#### `Navbar.jsx`
Top navigation bar with logo, search, cart icon, and user menu.

#### `Footer.jsx`
Site footer with links, copyright, social media icons.

#### `Loader.jsx`
Loading spinner component displayed during async operations.

#### `ErrorMessage.jsx`
Reusable error display component for showing error messages to users.

### Product Components (`/client/src/components/product`)

Product display components.

#### `ProductList.jsx`
Grid/list view of multiple products with filtering and sorting options.

#### `ProductCard.jsx`
Individual product card showing image, name, price, and "Add to Cart" button.

#### `ProductDetails.jsx`
Detailed product view with full description, images gallery, reviews, and purchase options.

---

## Context (`/client/src/context`)

React Context API for global state management.

#### `AuthContex.jsx`
Authentication context providing user state, login/logout functions, and auth status throughout the app.

#### `CartContex.jsx`
Shopping cart context managing cart items, quantities, add/remove operations, and total calculations.

---

## Hooks (`/client/src/hooks`)

Custom React hooks for reusable logic.

#### `useAuth.js`
Custom hook providing authentication functionality (login, logout, register, user state).

#### `useCart.js`
Custom hook for cart operations (add item, remove item, update quantity, clear cart).

#### `useProduct.js`
Custom hook for product-related operations (fetch products, search, filter, pagination).

---

## Pages (`/client/src/pages`)

Full page components mapped to routes.

#### `Home.jsx`
Homepage displaying featured products, categories, hero banner, and promotional content.

#### `ProductPage.jsx`
Product detail page showing full product information and related products.

#### `CategoryPage.jsx`
Page displaying all products within a specific category with filters.

#### `SearchResults.jsx`
Search results page displaying products matching search query.

#### `CartPage.jsx`
Full cart page with detailed cart view and checkout navigation.

#### `CheckoutPage.jsx`
Checkout page containing shipping, payment, and order review forms.

#### `OrderConfirmation.jsx`
Order success page showing order details and confirmation number.

#### `UserProfile.jsx`
User account page with order history, saved addresses, and account settings.

#### `NotFound.jsx`
404 error page displayed when route doesn't exist.

---

## Services (`/client/src/services`)

API communication layer using Axios.

#### `api.js`
Base Axios instance with interceptors for authentication headers and error handling.

#### `authService.js`
API calls for authentication (login, register, logout, token refresh).

#### `productService.js`
API calls for product operations (fetch products, search, filter, get by ID).

#### `orderService.js`
API calls for order operations (create order, fetch user orders, get order details).

#### `paymentService.js`
API calls for payment processing (create payment intent, confirm payment).

---

## Utils (`/client/src/utils`)

Utility functions and constants.

#### `constants.js`
Application-wide constants (API endpoints, status codes, configuration values).

#### `formatters.js`
Formatting utilities (currency formatting, date formatting, string manipulation).

#### `validation.js`
Form validation functions (email validation, password strength, required fields).

---

## Server Directory (`/server`)

Backend Node.js/Express API server.

### Configuration (`/server/config`)

Server configuration files.

#### `db.js`
Database connection configuration (MongoDB/PostgreSQL connection setup, connection pooling).

#### `oauth.js`
OAuth 2.0 configuration for third-party authentication (Google, Facebook login settings).

#### `stripe.js`
Stripe payment gateway configuration (API keys, webhook setup).

---

## Controllers (`/server/controllers`)

Business logic and request handlers.

#### `authController.js`
Handles authentication logic (register, login, logout, password reset, JWT token generation).

#### `userController.js`
User management operations (get profile, update profile, change password, delete account).

#### `productController.js`
Product CRUD operations (create, read, update, delete products, search, filter).

#### `orderController.js`
Order management (create order, get orders, update order status, cancel order).

#### `paymentController.js`
Payment processing logic (create payment intent, handle webhooks, refunds).

#### `adminController.js`
Admin-specific operations (dashboard stats, user management, system settings).

---

## Middleware (`/server/middleware`)

Express middleware for request processing.

#### `authMiddleware.js`
JWT authentication middleware verifying tokens and attaching user to request.

#### `adminMiddleware.js`
Authorization middleware checking if authenticated user has admin privileges.

#### `errorMiddleware.js`
Global error handling middleware catching and formatting errors.

#### `validationMiddleware.js`
Request validation middleware using schemas (validates request body, params, query).

#### `rateLimitter.js`
Rate limiting middleware preventing API abuse (limits requests per IP/user).

---

## Models (`/server/models`)

Database schema definitions (Mongoose/Sequelize models).

#### `User.js`
User model schema (username, email, password hash, role, addresses, timestamps).

#### `Product.js`
Product model schema (name, description, price, images, category, inventory, ratings).

#### `Order.js`
Order model schema (user reference, products, quantities, total, status, shipping info).

#### `Category.js`
Product category model schema (name, description, slug, parent category).

---

## Routes (`/server/routes`)

API route definitions mapping URLs to controllers.

#### `authRoutes.js`
Authentication endpoints (`POST /api/auth/register`, `/login`, `/logout`, `/refresh`).

#### `userRoutes.js`
User endpoints (`GET /api/users/profile`, `PUT /api/users/profile`, `GET /api/users/orders`).

#### `productRoutes.js`
Product endpoints (`GET /api/products`, `GET /api/products/:id`, `POST /api/products` [admin]).

#### `orderRoutes.js`
Order endpoints (`POST /api/orders`, `GET /api/orders`, `GET /api/orders/:id`, `PUT /api/orders/:id/status`).

#### `paymentRoutes.js`
Payment endpoints (`POST /api/payment/create-intent`, `POST /api/payment/webhook`).

#### `adminRoutes.js`
Admin endpoints (`GET /api/admin/dashboard`, `GET /api/admin/users`, `DELETE /api/admin/users/:id`).

---

## Server Files

#### `server.js`
Main server entry point - Express app setup, middleware configuration, route mounting, server start.

#### `server.json`
Server configuration file (may contain port, environment settings, or metadata).

#### `.env`
Environment variables for the server (database URLs, API keys, JWT secrets, Stripe keys).

#### `.gitignore`
Server-specific Git ignore rules.

---

## Utils (`/server/utils`)

Backend utility functions.

#### `jwtUtils.js`
JWT token utilities (generate token, verify token, decode token, refresh logic).

#### `emailService.js`
Email sending functionality (order confirmations, password resets, notifications using Nodemailer/SendGrid).

#### `validators.js`
Server-side validation schemas and functions (email format, password strength, data sanitization).

#### `calculatePricing.js`
Pricing calculation utilities (subtotal, tax, shipping, discounts, total calculation).

---

## Git Directory (`/.git`)

Git version control metadata (branches, commits, configuration). This directory is automatically managed by Git and should not be manually edited.

---

## Technology Stack Summary

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB/Mongoose** - Database (likely)
- **JWT** - Authentication
- **Stripe** - Payment processing
- **OAuth 2.0** - Third-party authentication

### Development Tools
- **Git** - Version control
- **PostCSS** - CSS processing
- **ESLint/Prettier** - Code quality (likely)

---

## Application Flow

1. **User Registration/Login** → JWT token stored in client
2. **Browse Products** → Fetch from `/api/products`
3. **Add to Cart** → Managed by CartContext (local state)
4. **Checkout** → Shipping form → Payment form
5. **Payment Processing** → Stripe integration
6. **Order Creation** → POST to `/api/orders`
7. **Order Confirmation** → Email sent via emailService

---

## Security Features

- JWT-based authentication
- Password hashing (likely bcrypt)
- Protected routes (client & server)
- Rate limiting
- Input validation
- CORS configuration
- Environment variable protection




This documentation provides a comprehensive overview of the full-stack e-commerce application structure. Each file serves a specific purpose in creating a complete online shopping experience with user authentication, product management, cart functionality, payment processing, and admin capabilities.
