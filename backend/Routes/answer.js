import express from "express";
import { answer } from "../Controllers/answerController.js"

const router = express.Router();
router.post('/:quizId/respond',answer )

export default router;