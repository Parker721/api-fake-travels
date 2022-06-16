import mongoose from "mongoose";
import Driver from "./driver.js";

const {Schema, model} = mongoose;

const busSchema= new Schema({
    plate:{
        type: String,
        required: true
    },
    owner:{
        type: String,
        required:true,
    },
    last_maintenance:{
        type: Date,
        required: true
    },
    Driver:{
        type: Schema.Types.ObjectId,
        ref: 'Driver'
    }
})

const Bus = model('Bus', busSchema);

export default Bus