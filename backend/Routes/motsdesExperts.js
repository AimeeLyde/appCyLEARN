import express from "express";
import { getWordsExperts } from "../Controllers/motsDesExpertsController.js"
const router = express.Router();

router.get("/", getWordsExperts);
export default router;