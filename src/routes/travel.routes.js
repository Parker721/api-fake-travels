import {get_Travel,get_AllTravels,travels_for_date,travels_for_price} from '../controllers/travel.controller.js'

import express from 'express';

export const travelRouter = express.Router();

travelRouter.get('/api/travel', get_AllTravels)

travelRouter.get('/api/travel/:id', get_Travel)

travelRouter.post('/api/travel/date',travels_for_date)

travelRouter.post('/api/travel/price',travels_for_price)