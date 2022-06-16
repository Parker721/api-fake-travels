import jwt from 'jsonwebtoken';


export const veryfyToken = async(token)=>{
    const decoded = jwt.verify(token,process.env.JWT_KEY)
    return decoded
}



export const tokenSign = async(user)=>{
    return jwt.sign({
        _id: user._id,
        role:user.role 
    },process.env.JWT_KEY,{
        expiresIn:'1h'
    }
    )
}

export const decodedToken = async(token)=>{
    const decoded = jwt.verify(token,process.env.JWT_KEY)
    return decoded
}