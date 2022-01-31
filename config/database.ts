import mongoose from "mongoose";
import "colors";

const connectDB = async (url: string) => {
    try {
        const conn = await mongoose.connect(url);

        console.log(
            // `MongoDB Connected: ${conn.connection.host}`.cyan.underline
            `MongoDB Connected: `
        );
    } catch (error: any) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};

export default connectDB;
