import express  from "express";
import {travelRouter}  from "./routes/travel.routes.js";
import {driverRouter} from "./routes/driver.routes.js";
import  {userRouter}  from "./routes/user.routes.js";
import { busRouter } from "./routes/bus.controller.js";

const app = express();

app.use(express.json());

app.use(driverRouter)
app.use(travelRouter)
app.use(userRouter)
app.use(busRouter)
 export default app