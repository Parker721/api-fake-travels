import {check} from 'express-validator';
import {validateResult} from '../helpers/validateHelper.js';


export const validateCreate =[
    check('name').exists().not().isEmpty().withMessage('Name is required')
    .isLength({min:3}).withMessage('Name must be at least 3 characters long'),

    check('username').exists().not().isEmpty().withMessage('Username is required').isLength({min:3}).withMessage('Username must be at least 3 characters long'),

    check('email').exists().not().isEmpty().isEmail().withMessage('Email is required'),

    check('password').exists().not().isEmpty().withMessage('Password is required'), 
    check('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
    
    (req,res,next)=>{
        validateResult(req,res,next);
    }
]