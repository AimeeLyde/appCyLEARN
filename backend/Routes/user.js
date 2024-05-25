import express from "express";
import { updateUser, deleteUser, getAllUser, getSingleUser } from "../Controllers/userController.js";

const router = express.Router();
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.get("/", getAllUser);
router.delete("/:id", deleteUser);

export default router;