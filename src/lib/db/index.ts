import mongoose from 'mongoose';
import dotenv from "dotenv";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/yourdatabase', {
            autoIndex: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

export default connectDB;
