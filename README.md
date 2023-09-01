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

# Some Snaps of Projects
First user will register 
![registration](https://github.com/Deepakkushwaha01/MERN-AUTHENTICATION/assets/140472340/631bfa15-3eee-474c-a212-7903360c648b)
![registration](https://github.com/Deepakkushwaha01/MERN-AUTHENTICATION/assets/140472340/73e3ae5f-a40a-494a-8814-b362fae4e8b5)



# Env Variables
 Create .env file and add the following
 ```
DB_USER=user
DB_PASSWORD=admin
JWT_SECRET=kodeklan
PORT=8080
```
Change the JWT_SECRET to what you want

# Install Dependencies (frontend & backend)
 ```
cd frontend
npm install

cd server
npm install
```

# Run 
```
cd frontend
npm run dev

cd server
node index.js
```

