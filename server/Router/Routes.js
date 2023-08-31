import express from "express";
import { UserRegister } from "../Controller/UserController.js";
import User from "../Models/UserModel.js";
import { generateToken } from "../Config/TokenGen.js";
import { comparepassword } from "../Config/Hashpass.js";
import { Authenticate } from "../Middleware/Authenticate.js";

const router = express.Router();


router.get("/validUser",Authenticate,(req,res)=>{
res.send({
  success:true,
  message:"authentication successfully",
  validUser:req.validUser
});
})



router.get("/logout",(req,res)=>{
  res.clearCookie("UserToken",{path:"/"});
  res.send({
    success:true,
    message:"Logout successfully",
  });
  })



// Register User

router.post("/register", UserRegister);

// Login User

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "email and password must required",
      });
    }

    const loginUser = await User.findOne({ email: email });

    if (loginUser && (await comparepassword(password, loginUser.password))) {
      const token = await generateToken(loginUser._id);

      loginUser.tokens = loginUser.tokens.concat({ token: token });
      loginUser.save();

      res.cookie("UserToken", token, {
        httpOnly: true,
     /*  //This cookie also expires after 360000 ms(milliseconds) from the time it is set.
res.cookie(name, 'value', {maxAge: 360000}); */
        maxAge: 360000
      });

      return res.status(200).send({
        success: true,
        message: "User Login successfully",
        loginUser,
      });
    } else {
      return res.status(201).send({
        success: false,
        message: "user Name and Password is wrong",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Getting error",
      error,
    });
  }
});

export default router;
