import {
    deleteUserProfile,
    getUserProfile,
    getUsers,
    loginUser,
    registerUser,
    updateUserProfile,
} from "../../controllers/userController";
import { authMiddleware } from "../../Middlewares/auth";

const router = require("express").Router();

router.get("/", getUsers)
router.post("/signup", registerUser);
router.post("/login", loginUser);

router.get("/profile", authMiddleware, getUserProfile);
router.put("/updateProfile", authMiddleware, updateUserProfile);
router.delete("/deleteProfile/:id", authMiddleware, deleteUserProfile);

export default router;
