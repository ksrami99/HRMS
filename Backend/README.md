
# HRMS Backend

This is the backend for the Human Resource Management System (HRMS). It is built using Node.js, Express, and Prisma ORM with a PostgreSQL database.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Database Schema](#database-schema)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ksrami99/HRMS.git
    cd hrms-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up the database:
    ```sh
    npx prisma migrate dev
    ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
PORT=3000
```

## Running the Server

Start the server with the following command:

```sh
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

### User Routes

- `POST /api/v1/user/login` - Login user
- `GET /api/v1/user/profile` - Get logged-in user's profile
- `PUT /api/v1/user/updateProfile` - Update logged-in user's profile
- `POST /api/v1/user/create-employee` - Create employee profile (HR/Admin only)
- `DELETE /api/v1/user/deleteProfile` - Delete employee profile (HR/Admin only)
- `GET /api/v1/user/get-user/:id` - Get user profile by ID (HR/Admin only)
- `GET /api/v1/user/get-all-users` - Get all users (HR/Admin only)
- `PUT /api/v1/user/update-user-role` - Update user role (HR/Admin only)

### Employee Routes

- `POST /api/v1/employee/createEmployee` - Create employee (HR/Admin only)
- `GET /api/v1/employee` - Get all employees (HR/Admin only)
- `GET /api/v1/employee/:id` - Get employee by ID (HR/Admin only)
- `PUT /api/v1/employee/:id` - Update employee (HR/Admin only)
- `DELETE /api/v1/employee/:id` - Delete employee (HR/Admin only)

## Middleware

- `authMiddleware` - Verifies JWT token and sets user ID and role in the request
- `verifyRole` - Verifies if the user has the required role to access the route

## Database Schema

The database schema is defined using Prisma ORM. The main models are:

- `User`
- `Employee`
- `Attendance`
- `Leave`

Refer to the `prisma/schema.prisma` file for detailed schema definitions.

