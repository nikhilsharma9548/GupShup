import User from "../Models/User.model.js";
import jwt from 'jsonwebtoken'

export const AuthUser = async (req, res, next) => {
    try {
        const token = req.headers.token;

        const JWT_SECRET = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(JWT_SECRET.userId).select("-password");

        if(!user){
            return res.json(({success: false, message: "User not found"}))
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error.message)
        res.json(({success: false, message: error.message}))
    }
}