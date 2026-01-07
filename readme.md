# Real-Time Ticket Management System

A full-stack real-time ticket management application built with a modular backend architecture and a modern React + TypeScript frontend.

The system supports both **HTTP and WebSocket servers running on the same port**, enabling seamless handling of **non–real-time operations** via REST APIs and **real-time interactions** such as notifications, status updates, and messaging via WebSockets.

---

## 🔄 System Workflow

The application is designed to support secure authentication, real-time communication, and scalable modular development.

### Authentication & Session Flow
1. Users sign up or log in using JWT-based authentication.
2. Authentication uses:
   - Stateless **Access Token**
   - **Refresh Token** stored in cookies
3. On every authorized request:
   - Access token is validated from request headers
   - Refresh token is verified from cookies
   - Session data is retrieved and validated from **Redis**
4. Verified session data is shared across the request–response lifecycle.

---

### Ticket & Real-Time Features
- Users can create support tickets after logging in.
- Ticket creation immediately notifies the admin via WebSocket.
- Real-time features include:
  1. Ticket notifications
  2. Ticket status updates by admin and user
  3. Real-time messaging between admin and ticket owner

⚠️ Constraints:
- Messages are scoped to **one ticket session at a time**
- Only the **admin** and the **user who created the ticket** can communicate
- Users can only close tickets, not update other statuses

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Axios (with interceptors)
- Redux Toolkit
- WebSocket (Socket Provider)
- Formik + Custom Form Validations
- Modular & Reusable Components

### Backend
- Node.js
- Express
- WebSocket Server
- JWT Authentication
- Redis (Session Management)
- MySQL (Sequalize)
- Modular Architecture (Controller → Service → Repository)
- Middleware-level & DB Schema Validations

---


---

## 🚀 Running the Project Locally

### ✅ Prerequisites
- Node.js (v18 or higher)
- MySQL
- Redis

---

## 🔧 Frontend Setup

```bash
git clone <frontend-repo-url>
cd frontend
npm install
Create a .env file:

env
Copy code
VITE_API_BASE_URL=http://localhost:<PORT>
VITE_SOCKET_URL=ws://localhost:<PORT>
Start the frontend:

bash
Copy code
npm run dev
🔧 Backend Setup
bash
Copy code
git clone <backend-repo-url>
cd backend
npm install
Create a .env file with required configuration (DB, Redis, JWT secrets).

Run database migrations from the migration folder in the project root.

Start the backend server:

bash
Copy code
npm run dev