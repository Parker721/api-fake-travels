import { post_login } from "../controllers/login.controller.js";

import express from "express";

loginrRouter = express.Router();

loginrRouter.post("/api/login", post_login);

