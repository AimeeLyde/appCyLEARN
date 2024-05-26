import express from "express";
import { getBonnesPratiques } from "../Controllers/BonnesPratiquesController.js"
const router = express.Router();

router.get("/", getBonnesPratiques);
export default router;