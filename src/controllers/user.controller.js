
import User  from '../models/user.js'

export const get_AllUsers =async(req,res)=>{
    const users = await User.find({})
    if(!users){
        return res.status(404).send({
            message: 'any user found'
        })
    
    }
    res.json(users)
}


export const get_User= async(req,res)=>
{
    try{
    user = User.findById(req.params)
    if(!user)
    {
        res.status(404).send({
            message:"User not found :("
        })
    }
    
    res.json(user)
    }catch(err){
        console.log(err)
    }

}

export const post_User = async (req,res)=>{
try{
    user = new User(req.body)
    if(!user){
        return res.status(400).send({
            message:"invalid user"
        })
    }
    await user.save()
    res.json(user)
   

}catch(err){

}
}

export const put_User= async(req,res)=>{
    const user = await User.findByIdAndUpdate({_id:id}, req.body, {new:true})
    if(!user)
    {
        return res.status(404).send({
            message:"user not exist"    
        })
    }
    res.json(user)
}

export const delete_User = async(req,res)=>{
    const{id}= req.params
    const user = await User.findByIdAndDelete({_id:id})
    if(!user){
        return res.status(404).send({
            message: 'user not found'
        })
    
    }
    res.json({message:"user delete successfully"})
}

