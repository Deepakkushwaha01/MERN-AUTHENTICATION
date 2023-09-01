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
1. user will register 

![registration](https://github.com/Deepakkushwaha01/MERN-AUTHENTICATION/assets/140472340/631bfa15-3eee-474c-a212-7903360c648b)

2. User will not access about page without registration
   
![logout_About](https://github.com/Deepakkushwaha01/MERN-AUTHENTICATION/assets/140472340/a925535b-601a-4019-a028-3ff8fda29b09)

3. To access the about page login first , whenever user login it will generate token and store in cookie , To generate token we use JWT Authentication

![login](https://github.com/Deepakkushwaha01/MERN-AUTHENTICATION/assets/140472340/a6cbc4cb-8a95-4fde-b34d-80addd66fb79)

4. To access the about it will validate user by checking user's token which store in cookie

![login_About](https://github.com/Deepakkushwaha01/MERN-AUTHENTICATION/assets/140472340/a62c66c1-1d2c-44e1-9373-8d31b7b0173d)

5. Home page without login
 ![logout_Home](https://github.com/Deepakkushwaha01/MERN-AUTHENTICATION/assets/140472340/e5350df5-857f-4e95-ab11-12fd97d340ad)
6. Home after login 
![login_Home](https://github.com/Deepakkushwaha01/MERN-AUTHENTICATION/assets/140472340/650fc964-13d0-4a2e-89c1-e2c922383d78)

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

