# **🛍️ Project: Full-Stack E-Commerce Platform Requirements**

The goal is to build a modern, fully functional store with a dedicated customer experience and a secure administrative area. This platform will be the cornerstone of your portfolio, proving your ability to handle a complex application lifecycle.

Here is a detailed outline of the technical requirements, broken down by the MERN stack components, ensuring you hit all the necessary complexity markers.



## **1\. Frontend Requirements (React.js / Tailwind CSS)**

### **User Interface (UI)**

* Responsive Design across mobile, tablet, and desktop, using Tailwind CSS.  
* Consistent, modern e-commerce aesthetic.  
* Ensure all components (Navbar, Cart, Product Cards) are styled with Tailwind utilities for high re-usability.
* A toggle switch that switches between light and dark themes; light theme accent color is green, and dark theme accent color is purple.
* Smooth and clean animations.
* Rounded corners and shadows creates a clean, professional, and user-friendly aesthetic.

### **Product Display**

* Includes a homepage listing, product detail page (PDP), and category/search results page.
* Use React Router for page navigation.
* The PDP must dynamically fetch product data using the product ID from the API.

### **State Management**

* Maintain global state for user authentication and the shopping cart.  
* Use React Context API or Redux Toolkit (if seeking roles requiring Redux experience) for managing cart state and user login status.

### **User Experience (UX)**

* Implement non-reloading cart updates.  
* Include instant client-side form validation (e.g., for login/checkout).  
* Implement Asynchronous JavaScript (Fetch/Axios) to communicate with the API without refreshing the page.



## **2\. Backend Requirements (Node.js / Express / MongoDB)**

### **API Architecture**

* Design and implement RESTful APIs with clear endpoints for all data operations.  
* Use Express.js to handle routing (/api/products, /api/users, /api/orders).  
* Implement proper HTTP Status Codes (e.g., 200 OK, 201 Created, 404 Not Found).

### **Database Design**

* Create schemas for Products, Users, and Orders.  
* Use Mongoose (ODM for MongoDB) to define schemas.  
* The Order schema must reference both User and Product data (using Mongoose populate).

### **Authentication & Security**

* Secure user registration, login, and protected routes.  
* Use Bcrypt for hashing user passwords.  
* Implement JSON Web Tokens (JWT) for session management and authorization checks.

### **Middleware**

* Implement server-side validation and authorization.  
* Use Express Middleware to verify JWTs for protected routes (e.g., placing an order, accessing user profile).  
* Use Express Middleware to validate incoming request body data.



## **3\. Core E-Commerce & Deployment Requirements**

### **Payment Integration**

* Process payments securely, resulting in an order being created in the database.  
* Use a service like Stripe or PayPal (client-side/server-side integration).  
* This involves setting up the API keys and handling webhooks/confirmation messages.
* Using OAuth 2.0 + JWT: (Here are the instructions on using this)
    1. Use OAuth 2.0 for authorization flow
    2. Issue JWT as the access token format
    3. JWT contains user info and permissions
    4. Resource server validates JWT signature


### **Shopping Cart Logic**

* Handle adding, removing, and updating product quantities.  
* Implement logic to calculate subtotal, tax, and shipping on the **server side** (to prevent client manipulation) before the payment is processed.

### **Admin Panel (Protected)**

* Implement CRUD operations for managing the product catalog and viewing all orders.  
* Create a special "Admin" role in the User schema.  
* Restrict access to all /admin routes using JWT and role checking middleware.

### **Deployment**

* Make the application live and accessible.  
* **Frontend:** Deploy the React app on Vercel.  
* **Backend:** Deploy the Node/Express API on a service like Render.
* Ensure the frontend correctly points to the live backend API URL.
client/src/components/


### **Project Structure**
```
fullstack_ecommerce/
│
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   └── ErrorMessage.jsx
│   │   │   │
│   │   │   ├── product/
│   │   │   │   ├── ProductCard.jsx
│   │   │   │   ├── ProductList.jsx
│   │   │   │   └── ProductDetails.jsx
│   │   │   │
│   │   │   ├── cart/
│   │   │   │   ├── Cart.jsx
│   │   │   │   ├── CartItem.jsx
│   │   │   │   └── CartSummary.jsx
│   │   │   │
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── PrivateRoute.jsx
│   │   │   │
│   │   │   ├── checkout/
│   │   │   │   ├── CheckoutForm.jsx
│   │   │   │   ├── ShippingForm.jsx
│   │   │   │   └── PaymentForm.jsx
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── ProductManagement.jsx
│   │   │       ├── OrderManagement.jsx
│   │   │       └── AdminRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProductPage.jsx
│   │   │   ├── CategoryPage.jsx
│   │   │   ├── SearchResults.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── CheckoutPage.jsx
│   │   │   ├── OrderConfirmation.jsx
│   │   │   ├── UserProfile.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useCart.js
│   │   │   └── useProducts.js
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── productService.js
│   │   │   ├── orderService.js
│   │   │   └── paymentService.js
│   │   │
│   │   ├── utils/
│   │   │   ├── validation.js
│   │   │   ├── formatters.js
│   │   │   └── constants.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                          # Node.js/Express Backend
│   ├── config/
│   │   ├── db.js
│   │   ├── stripe.js
│   │   └── oauth.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Category.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── userRoutes.js
│   │   ├── adminRoutes.js
│   │   └── paymentRoutes.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   ├── userController.js
│   │   ├── adminController.js
│   │   └── paymentController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── adminMiddleware.js
│   │   ├── validationMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── rateLimiter.js
│   │
│   ├── utils/
│   │   ├── jwtUtils.js
│   │   ├── validators.js
│   │   ├── calculatePricing.js
│   │   └── emailService.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json                     # Root package.json (optional for monorepo)
```




## **4\. Package Dependencies**

Here is a list of the npm packages required for the application to run, broken down by the frontend and backend, along with
guidance for deploying to a cloud service like Vercel.

**You can install all dependencies for each part of the application by running `npm install` in both the `client/` and `server/`directories respectively.**

### Backend (server/)

#### These packages are required to run the Express API server:

   * **`bcryptjs`**: For hashing user passwords.
   * **`cookie-parser`**: To parse cookie headers.
   * **`cors`**: To enable Cross-Origin Resource Sharing.
   * **`dotenv`**: To load environment variables from a .env file.
   * **`express`**: The web server framework.
   * **`express-async-handler`**: To handle exceptions within async Express routes.
   * **`express-rate-limit`**: For basic API rate-limiting.
   * **`express-validator`**: For server-side input validation.
   * **`jsonwebtoken`**: To create and verify JSON Web Tokens for authentication.
   * **`mongoose`**: The Object Data Modeling (ODM) library for MongoDB.
   * **`nodemailer`**: For sending emails (e.g., order confirmations).
   * **`stripe`**: The official Node.js library for the Stripe payment API.



#### Development Dependency:
   * **`nodemon`**: To automatically restart the server during development.


### Frontend (client/)

#### These packages are required for the React user interface.

   * **`@reduxjs/toolkit`**: The official, opinionated toolset for efficient Redux development.
   * **`@stripe/react-stripe-js`** & **`@stripe/stripe-js`**: To integrate Stripe Elements for payments in React.
   * **`axios`**: For making HTTP requests to the backend API.
   * **`lucide-react`**: A library of simply beautiful icons.
   * **`react`**, **`react-dom`**, **`react-scripts`**: Core libraries for building a Create React App.
   * **`react-redux`**: Official React bindings for Redux.
   * **`react-router-dom`**: For client-side routing and navigation.

### Development Dependency:
   * **`tailwindcss`**: The utility-first CSS framework used for styling.



## **5\. Startup Commands for Cloud Services (like Vercel)**


**Deploying this full-stack project requires handling the frontend and backend separately, as they are distinct application types.**

### **1\. Frontend Deployment (on Vercel)**

  Vercel is perfectly suited for deploying the frontend (client) part of your application.

   * Startup Command: You do not need a special startup command. Vercel automatically detects Create React App and runs the
     correct commands.
   * Build Command: Vercel will use npm run build.
   * Output Directory: Vercel will correctly identify the output as the build directory.

  The most important configuration steps in your Vercel project settings would be:
   1. Set the Root Directory: Set this to client. This tells Vercel to run the build commands from within your client-side
      folder.
   2. Set Environment Variables: You must set the **`REACT_APP_API_BASE_URL`** environment variable to the public URL of your deployed
      backend API. You will also need to add your **`REACT_APP_STRIPE_PUBLIC_KEY`**.

### **2\. Backend Deployment (Not on Vercel)**

Your Express.js server is a long-running Node.js process, which is not compatible with Vercel's standard deployment model
(which is for static sites and serverless functions).

As recommended in the project's README.md, you should deploy the backend to a different service that supports persistent
Node.js applications, such as:
   * Render (Recommended in your README.md)
   * Heroku
   * AWS EC2 or AWS Elastic Beanstalk

On a service like Render, you would typically configure:
   * Start Command: npm start
   * Environment Variables: You would need to add all the variables from your `server/.env` file (like **`MONGO_URI`**, **`JWT_SECRET`**,
     etc.) into the service's environment variable settings.




### For the description of files and directories in the already created file tree:
* See [ARCHITECTURE.md](https://github.com/sacredibis/fullstack_ecommerce/blob/master/ARCHITECTURE.md)
