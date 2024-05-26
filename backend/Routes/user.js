import express from "express";
import { updateUser, deleteUser, getAllUser, getSingleUser, getUserProfile } from "../Controllers/userController.js";

import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();
router.get("/:id",authenticate, getSingleUser);
router.put("/:id", updateUser);
router.get("/", getAllUser);
router.delete("/:id", deleteUser);
router.get("/profile/me", getUserProfile);

export default router;