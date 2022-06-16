
import {decodedToken } from '../helpers/generateToken.js';


export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const decoded = await decodedToken(token);
        const user = await User.findById(decoded._id);
        if (user._id) {
           next();
            }
        } catch (err) {
            res.status(401).send({
                message: 'Invalid token'
            })

        }
}

