import mongoose from "mongoose";

const {Schema, model} = mongoose;

const travelsSchema = new Schema({  
    origin:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        requerided: true
    },
    date:{
        type: Date,
        required: true
    },
  
    capacity_of:{
        type: Number,
        required: true
    },
    bus:{
        type:Schema.Types.ObjectId,
        ref: 'Bus'
    },
    full:{
        type: Boolean,
        default: false
    },
    users:[{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
    
    })
   
const Travel = model('Travel',travelsSchema)


export default Travel;