# Chat Application

A real-time chat application built with React and Node.js, featuring user authentication, real-time messaging, and profile management.

## Features

- User authentication (Register, Login, Forgot Password)
- Real-time messaging using Socket.IO
- User search functionality
- Profile management and editing
- Responsive design with Tailwind CSS
- Message history
- Online/Offline status

## Technologies Used

### Frontend
- React.js
- Redux Toolkit (State Management)
- Socket.IO Client
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- React Icons
- Moment.js

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JWT Authentication
- Bcrypt.js
- CORS
- Cookie Parser
- Dotenv

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── assets/        # Images and media files
│   │   ├── components/    # React components
│   │   ├── helpers/       # Helper functions
│   │   ├── layout/        # Layout components
│   │   ├── pages/        # Page components
│   │   ├── redux/        # Redux store and slices
│   │   └── routes/       # Application routes
│   └── public/           # Public assets
│
└── server/               # Backend Node.js application
    ├── config/          # Database configuration
    ├── controller/      # Route controllers
    ├── helpers/         # Helper functions
    ├── models/          # Mongoose models
    ├── routes/          # API routes
    └── socket/          # Socket.IO implementation
```

## Screenshots

![Screenshot 1](Screenshot%20from%202025-03-19%2010-57-29.png)
![Screenshot 2](Screenshot%20from%202025-03-19%2010-58-50.png)
![Screenshot 3](Screenshot%20from%202025-03-19%2011-00-32.png)

## Setup Instructions

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```


3. Start the development server:
```bash
npm start
```

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file with necessary environment variables:
```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm start
```

For development mode with auto-reload:
```bash
npm run dev
```

## API Endpoints

- POST `/api/register` - User registration
- POST `/api/login` - User authentication
- POST `/api/forgot-password` - Password recovery
- GET `/api/user/search` - Search users
- PUT `/api/user/update` - Update user profile
- GET `/api/conversations` - Get user conversations
- POST `/api/messages` - Send messages
- GET `/api/messages/:conversationId` - Get conversation messages
