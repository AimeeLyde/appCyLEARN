import express from "express"
import { getAllCourses,finishCourse } from "../Controllers/coursController.js"

const router = express.Router();
router.get("/", getAllCourses);
router.post("/finishCourse", finishCourse);

export default router;