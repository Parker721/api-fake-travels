import app from "./app.js";
import './utils/mongo.js'
import 'dotenv/config';

import express  from "express";
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
        console.log(`Server started on port ${PORT}`);}
)