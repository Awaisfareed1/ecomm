import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        //validations
        if (!name) {
            return res.send({ error: 'Name is Required' });
        }
        if (!email) {
            return res.send({ error: 'Email is Required' });
        }
        if (!password) {
            return res.send({ error: 'Password is Required' });
        }
        if (!phone) {
            return res.send({ error: 'Phone Number is Required' });
        }
        if (!address) {
            return res.send({ error: 'Address is Required' });
        }
        //existing User
        const existingUser = await userModel.findOne({ email });
        //checking Existing User
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: "Already a member please Login"
            })
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({
            name,
            email,
            address,
            phone,
            password: hashedPassword
        }).save();
        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
}

//POST LOGIN
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validate
        if (!email || !password) {
            res.status(404).send({
                message: "Invalid Username or Password",
                success: false
            })
        }
        //check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not Registered"
            })
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            })
        }
        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '5h' });
        res.status(200).send({
            success: true,
            message: "LoggedIn Successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
}

//test constroller

export const testController = (req, res) => {
    res.send("Protected Route")
}