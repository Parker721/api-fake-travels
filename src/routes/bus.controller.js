import { get_AllBuses,get_Bus,post_Bus,put_Bus,delete_Bus } from "../controllers/bus.controller.js";

import express from "express";

export const busRouter = express.Router();


busRouter.get("/api/buses", get_AllBuses);


busRouter.post("/api/buses", post_Bus);

busRouter.put("/api/buses/:id", put_Bus);

busRouter.delete("/api/buses/:id", delete_Bus);

busRouter.get("/api/buses/:id", get_Bus);