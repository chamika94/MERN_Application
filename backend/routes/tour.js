import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import { getToursByUser, createTour, getTours, getTour} from "../controllers/tour.js";

router.post("/", auth, createTour);
router.get("/",getTours);
router.get("/:id",getTour);
router.get("/:id",getToursByUser);

export default router