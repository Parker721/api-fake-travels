import { veryfyToken } from "../helpers/generateToken.js";


export const roleAuth=(roles)=> async (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(' ').pop();
        const decoded = await veryfyToken(token);
        if(!roles.includes(decoded.role)){
            return res.status(401).send({
                message:"You are not authorized"
            })
        }
        next();
    }catch(err){
        res.status(401).send({
            message:"You are not authorized"
        })
    }
}