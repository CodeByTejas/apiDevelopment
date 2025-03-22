# User Management API

A RESTful API built with Node.js, Express, and PostgreSQL for managing users with different roles (Admin, Seller, Customer).

## API Testing Screenshots

### Endpoint Testing
![Endpoint Testing](outputs/endpointTesting.jpg)

### Postman Testing
![Postman Testing](outputs/postmantesting.jpg)

## Features

- Complete CRUD operations for user management
- Role-based user types (Admin, Seller, Customer)
- Input validation
- Password hashing
- PostgreSQL database with Sequelize ORM
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd user-management-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/user_management
PORT=3000
```

4. Initialize the database:
- Create a PostgreSQL database named `user_management`
- The tables will be automatically created when you start the server

5. Start the server:
```bash
npm run dev
```

## API Endpoints

### Get All Users
```http
GET /api/users
```

### Get User by ID
```http
GET /api/users/:id
```

### Create User
```http
POST /api/users
```
Request body:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "isSeller": false,
  "isCustomer": true,
  "isAdmin": false
}
```

### Update User
```http
PUT /api/users/:id
```
Request body (all fields optional):
```json
{
  "email": "updated@example.com",
  "password": "newpassword123",
  "firstName": "Jane",
  "lastName": "Smith",
  "isSeller": true,
  "isCustomer": true,
  "isAdmin": false
}
```

### Delete User
```http
DELETE /api/users/:id
```

## Project Structure

```
user-management-api/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── validators.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── index.js
├── outputs/
│   ├── endpointTesting.jpg
│   └── postmantesting.jpg
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Data Model

### User
- `id` (UUID, Primary Key)
- `email` (String, Unique)
- `password` (String, Hashed)
- `firstName` (String)
- `lastName` (String)
- `isSeller` (Boolean)
- `isCustomer` (Boolean)
- `isAdmin` (Boolean)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

## Security Features

- Password hashing using bcryptjs
- Input validation using express-validator
- UUID for user IDs
- Password excluded from GET responses

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 201: Resource created
- 400: Bad request
- 404: Resource not found
- 500: Server error

## Development

```bash
# Run in development mode with nodemon
npm run dev

# Run in production mode
npm start

# Run tests
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
