import { verifyToken } from "../Config/TokenGen.js";
import User from "../Models/UserModel.js";

export const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.UserToken;

    const validToken = await verifyToken(token);

    const validUser =await User.findOne({_id:validToken.id });
 
    if (!validUser) {
      throw new Error("User not Found");
    }
req.validUser=validUser;
req.token=token;
req.userID=validUser._id;
   
    next();
  } catch (error) {
    res.status(401).send("Unauthorised:token is not provided");
  }
};
