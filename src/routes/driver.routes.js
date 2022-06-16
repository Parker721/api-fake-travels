import {get_Driver,get_allDrivers,post_Driver,put_Driver,delete_Driver} from '../controllers/driver.controller.js'
import express from 'express';
import {auth} from '../middlewares/Auth.js';


export const driverRouter = express.Router();

driverRouter.get('/api/driver',auth,get_allDrivers)

driverRouter.get('/api/driver/:id',auth, get_Driver)

driverRouter.post('/api/driver',auth, post_Driver)

driverRouter.put('/api/driver/:id',auth, put_Driver)

driverRouter.delete('/api/driver/:id',auth, delete_Driver)



