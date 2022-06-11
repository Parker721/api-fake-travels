import {get_Driver,get_allDrivers,post_Driver,put_Driver,delete_Driver} from '../controllers/driver.controller.js'
import express from 'express';


export const driverRouter = express.Router();

driverRouter.get('/api/driver', get_allDrivers)

driverRouter.get('/api/driver/:id', get_Driver)

driverRouter.post('/api/driver', post_Driver)

driverRouter.put('/api/driver/:id', put_Driver)

driverRouter.delete('/api/driver/:id', delete_Driver)



