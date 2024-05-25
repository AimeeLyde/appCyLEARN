import express from "express"
import { getAllCourses } from "../Controllers/coursController.js"

const router = express.Router();
router.get("/", getAllCourses);
// router.get("/:coursId/quizzes", getQuizzesByCourse);

export default router;