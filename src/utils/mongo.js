import mongoose from "mongoose";
import 'dotenv/config';

const {MONGO_DB_URI} = process.env;
const connectionToString =MONGO_DB_URI


mongoose.connect(connectionToString)
.then(() => {
    console.log("Connected to MongoDB");
}).catch(e => {
    console.log("Error connecting to MongoDB: ", e);
});