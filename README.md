# ASOS - E-commerce Website

## Overview

**ASOS** is a responsive e-commerce platform designed for buying men’s clothing. It includes a variety of essential e-commerce features such as product listing, user authentication, cart management, coupons, offers, and image uploads.

## Features

- **Responsive Design**: Built with a responsive UI, accessible on all screen sizes.
- **User Authentication**: Secure login and signup functionality.
- **Product Listing**: Comprehensive product catalog for men's clothing, with sorting and filtering options.
- **Shopping Cart**: Add, update, or remove items from the cart with a live cart display.
- **Coupons & Offers**: Apply coupons for discounts and view ongoing offers.
- **Image Upload**: Allows users to upload profile pictures or add images to the product catalog.
- **Checkout**: Smooth and secure checkout process.

## Technologies Used

- **Frontend**: React, Chakra UI (or other preferred UI frameworks)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Cloudinary for managing image uploads
- **State Management**: Redux (optional, for global state management)

## Installation

1. Clone the repositories for both frontend and backend:

   ```bash
   git clone https://github.com/sohit-mishra/Asos_frontend
   git clone https://github.com/sohit-mishra/Asos_backend
   ```

2. Update the .env file:

   --- For frontend, ensure the backend URL is correctly set in the .env file.

   --- For backend, update the .env file with necessary environment variables such as database connection strings, JWT secrets, etc.

3. Install dependencies and start for both the frontend and backend:

   frontend

   ```
   npm install
   npm run dev
   ```

   backend

   ```
   npm install
   nodemon index.js

   ```

## Features in Detail

### User Authentication
- Signup and login pages allow users to create accounts and log in securely.
- Passwords are encrypted, and sessions are maintained with JWT tokens.

### Product List
- Displays a variety of men’s clothing options.
- Users can filter products based on category, price, and popularity.

### Coupons & Offers
- Users can apply available coupons during checkout for discounts.
- Regular promotions and offers are highlighted on the main page.

### Shopping Cart
- Users can add products to the cart, view items, and update quantities.
- Supports a seamless checkout process.

### Image Upload
- Cloudinary integration for secure and scalable image hosting.
- Users can upload profile images or add product images as needed.

---

Thank you!
```
