import express from "express";
import { getAllQuiz,getSingleQuiz } from "../Controllers/quizController.js"


const router = express.Router();
router.get("/", getAllQuiz);
router.get("/:id", getSingleQuiz);

export default router;