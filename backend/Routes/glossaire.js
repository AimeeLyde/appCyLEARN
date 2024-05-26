import express from "express";
import { getGlossaire } from "../Controllers/glossaireController.js"
const router = express.Router();

router.get("/", getGlossaire);
export default router;