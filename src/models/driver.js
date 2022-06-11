import  mongoose from "mongoose";

const { Schema, model } = mongoose;


const driverSchema= new Schema({
    name:{
        type: String
    },
    license:{
        type:Boolean,
        default:false
    },
    date_of_admission:{
        type: Date
    },
    active:{
        type:Boolean,
        required:true
    }
})


const Driver = model('Driver', driverSchema);

export default Driver