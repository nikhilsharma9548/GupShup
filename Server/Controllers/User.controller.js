import { getToken } from "../lib/Utils.js"
import User from "../Models/User.model.js"
import bcrypt from 'bcryptjs'

// user Sign Up controller
export const signu = async(req, res) => {
    const {fullName, email, password, bio} = req.body

    try {
        if(!fullName || !email || !password || !bio ){
            return res.json({success: false, message: "Missing Details"})
        }
        const user = await User.findOne({email});
        if(user){
            return res.json({success: false, message:"User already exists"})
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName, email, password: hashedPassword, bio
        });

        const  token = getToken(newUser._id)
        res.json({success: true, userData: newUser, token, message: "Account created"})
        
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message:error.message})
    }
} 

// User Login

export const Login = async(req, res) =>{
    try {
        const {email, password} = req.body

        const userData = await User.findOne({email})

        const isPasswordCorrect = await bcrypt.compare(password, userData.password)

        if(!isPasswordCorrect){
            return res.json({success:false, message:"Invalid Password"});
        }
        const  token = getToken(userData._id)
        res.json({success: true, userData, token, message: "Login successfully"})

    } catch (error) {
         console.log(error.message)
        res.json({success: false, message:error.message})
    }
}

export const  checkAuth = (req, res) => {
    res.json({success:true, user: req.user});
    
}