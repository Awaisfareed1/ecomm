import express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/api/v1/auth" , authRoutes);

//node port
const PORT = process.env.PORT || 8080;

//node route
app.get('/', (req, res) => {
    res.send('<h2>Welcome to Ecommerce</h2>');
})

//node PORT listener
app.listen(PORT, (req, res) => {
    console.log("Localhost is running on PORT ", PORT);
});

