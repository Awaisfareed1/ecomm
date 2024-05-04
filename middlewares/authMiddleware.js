import JWT from "jsonwebtoken";
import userModel from '../models/userModel.js'

//protected RoutesToken Based
export const requireSignin = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}

//admin Access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthirized Access"
            })
        } else {
            next();
        }
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: "Error in admin middleware"
        })
    }
}