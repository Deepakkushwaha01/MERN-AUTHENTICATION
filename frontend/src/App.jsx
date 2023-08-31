import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Login from "./Components/Pages/Login"
import Signup from "./Components/Pages/Signup"
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"

import Error from "./Components/Pages/Error"
import Logout from "./Components/Pages/Logout"


function App() {

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Signup/>} />
<Route path="/about" element={<About/>} />
<Route path="/logout" element={<Logout/>} />
<Route path="*" element={<Error/>} />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
