
import { tokenSign } from "../helpers/generateToken.js"


export const post_login = async(req,res,next)=>{
    try{
            const user = await User.findOne({email:req.body.email})
            const checkPassword = await compare(password,user.password)
    
            const tokenSession = await tokenSign(user)
     
        if(!(checkPassword))
        {
        return res.status(401).send({
                message:"Invalid credentials"
        })
        }
        res.json({
            token:tokenSession
        })
        next()
        }catch(err){
            res.status(400).send({
                message:"No authentication"
            })
        }
    }