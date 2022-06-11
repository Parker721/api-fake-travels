import {get_User,get_AllUsers,post_User,put_User,delete_User} from '../controllers/user.controller.js'
import express from 'express';

export const userRouter= express.Router();

userRouter.get('/api/user', get_AllUsers)

userRouter.get('/api/user/:id', get_User)

userRouter.post('/api/user/', post_User)

userRouter.put('/api/user/:id', put_User)

userRouter.delete('/api/user/:id', delete_User)


