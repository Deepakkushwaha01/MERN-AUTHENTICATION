# MERN-AUTHENTICATION
This is a starter app for a MERN stack application with authentication. This is for a SPA (Single Page Application) workflow that uses the Vite Build tool. This authentication workflow is based off of my MERN Stack From Scratch


It includes the following:

* Backend API with Express & MongoDB
* Routes for auth, logout, register, about
* JWT authentication stored in HTTP-only cookie
* Protected routes and endpoints
* Custom middleware to check JSON web token and store in cookie
* React frontend to register, login, logout, about
* React Bootstrap UI library

# Env Variables
 Rename the .env.example file to .env and add the following
 ```
DB_USER=user
DB_PASSWORD=admin
JWT_SECRET=kodeklan
PORT=8080
```
