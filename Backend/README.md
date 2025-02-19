# HRMS Backend

This is the backend for the HRMS (Human Resource Management System) project. It is built using Node.js, Express, and Prisma ORM.

## Project Structure

The project structure is as follows:

```
Backend/
├── node_modules/       # Node.js modules
├── src/                # Source code
│   ├── controllers/    # Controllers for handling requests
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   └── server.ts       # Server setup and start
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # NPM package configuration
├── package-lock.json   # NPM package lock file
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

-   Node.js
-   PostgreSQL

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-repo/hrms-backend.git
    cd hrms-backend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Update the `.env` file with your database credentials.

### Running the Application

1. Start the development server:

    ```sh
    npm run dev
    ```

2. The server will be running at `http://localhost:3000`.




## License

This project is licensed under the MIT License.
