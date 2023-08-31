import axios from "axios"


axios.defaults.withCredentials = true;

export const UserRegister=async(signup)=>{

const res=await axios.post("http://localhost:8080/register",signup);

return res;

}


export const UserLogin=async(login)=>{

    const res=await axios.post("http://localhost:8080/login",login);
    
    return res;
    
}


