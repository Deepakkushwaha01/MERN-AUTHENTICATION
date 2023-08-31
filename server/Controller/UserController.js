import { comparepassword, hashpassword } from "../Config/Hashpass.js";
import { generateToken } from "../Config/TokenGen.js";
import User from "../Models/UserModel.js";


export const UserRegister = async (req, res) => {
  try {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name) {
      return res.status(201).send({
        success: false,
        message: "Name is neccessary",
      });
    }

    if (!email) {
      return res.status(201).send({
        success: false,
        message: "Email is neccessary",
      });
    }

    if (!phone) {
      return res.status(201).send({
        success: false,
        message: "Phone is neccessary",
      });
    }

    if (!work) {
      return res.status(201).send({
        success: false,
        message: "Work is neccessary",
      });
    }

    if (!password) {
      return res.status(201).send({
        success: false,
        message: "Password is neccessary",
      });
    }

    if (!cpassword) {
      return res.status(201).send({
        success: false,
        message: "Confirm Password is neccessary",
      });
    }

    if (password != cpassword) {
      return res.status(201).send({
        success: false,
        message: "Password and Confirm Password must be same",
      });
    }

    const exsitingUser = await User.findOne({ email: email });

    if (exsitingUser) {
      return res.status(201).send({
        success: false,
        message: "User already exsit",
        exsitingUser,
      });
    }

    const newUser = await new User({
      name,
      email,
      phone,
      work,
      password:await hashpassword(password),
      cpassword:await hashpassword(cpassword),
    }).save();

    res.status(201).send({
      success: true,
      message: "User register successfully",
      newUser,
    });
  
} catch (error) {
    res.status(500).send({
      success: false,
      message: "Getting error",
      error,
    });
  }
};




/* export const Userlogin=async(req,res)=>{
try {

const {email,password}=req.body;

if(!email || !password ){
  return  res.status(400).send({
        success:false,
        message:"email and password must required"
    })
}


const loginUser = await User.findOne({ email: email });

if(loginUser && (await comparepassword(password,loginUser.password))){

const token=await generateToken(loginUser._id);



loginUser.tokens=loginUser.tokens.concat({token:token});
loginUser.save();




  return res.status(200).send({
    success:true,
    message:"User Login successfully",
    loginUser
})
}

else{
  return res.status(201).send({
      success: false,
      message: "user Name and Password is wrong",
    })
}


    
} catch (error) {
    res.status(500).send({
        success: false,
        message: "Getting error",
        error,
      }); 
}

} */