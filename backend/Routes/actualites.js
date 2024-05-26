import express from "express";
import { getActualites } from "../Controllers/actualitesController.js"
const router = express.Router();

router.get("/", getActualites);
export default router;