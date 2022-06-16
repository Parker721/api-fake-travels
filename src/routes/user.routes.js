import {get_User,get_AllUsers,post_User,put_User,delete_User} from '../controllers/user.controller.js'
import { validateCreate } from '../validators/user.js';
import { auth} from '../middlewares/Auth.js';
import { roleAuth } from '../middlewares/roleAuth.js';

import express from 'express';

export const userRouter= express.Router();

userRouter.get('/api/user',auth,roleAuth('Admin'),get_AllUsers)

userRouter.get('/api/user/:id',get_User)

userRouter.post('/api/user/',validateCreate,auth, post_User)

userRouter.put('/api/user/:id',auth,roleAuth('user'), put_User)

userRouter.delete('/api/user/:id',auth,roleAuth('user'), delete_User)

