````markdown
# 🩺 DocBook – Backend

A secure and scalable backend for **DocBook** – a full-stack doctor appointment booking application with Razorpay payment gateway integration.

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web server and routing
- **MongoDB Atlas** – Cloud database
- **Mongoose** – MongoDB ODM
- **JWT** – Authentication
- **Razorpay** – Payment gateway (test mode)
- **CORS + dotenv** – Middleware and environment configs
- **Render** – Deployment for backend API

## 🔑 Features

- 🔐 User Registration & Login (JWT-based)
- 🗓️ Appointment Booking with dynamic doctor fees
- 💳 Razorpay Payment Integration (Test Mode)
- ✅ Payment Verification & Status Update
- 📋 Appointment Listing with Success/Failure Tags
- 🔒 Protected Routes using Auth Middleware

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kulkarnimanas732/docbook-backend.git
cd docbook-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm run dev
```

### 4. Setup environment variables

Create a `.env` file in the root with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

## 📂 Folder Structure

```
src/
├── controllers/     # Business logic
├── models/          # Mongoose schemas
├── routes/          # Express route definitions
├── middlewares/     # Auth middleware
├── utils/           # Razorpay & helper functions
└── server.js        # App entry point
```

## 📡 API Endpoints

### Auth

* `POST /api/auth/register` – Register user
* `POST /api/auth/login` – Login and receive JWT

### Appointments

* `POST /api/appointments/create-order` – Create Razorpay order
* `POST /api/appointments/verify` – Verify payment and save status
* `GET /api/appointments` – Get user-specific appointments (JWT protected)

## 📫 Contact

Built with ❤️ by **Manas Kulkarni**
📧 (mailto:manaskulkarni12345@gmail.com)
🔗 (https://www.linkedin.com/in/manaskulkarni12345)

---

