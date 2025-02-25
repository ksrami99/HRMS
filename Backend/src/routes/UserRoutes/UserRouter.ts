
import {
    craeteUser,
    deleteUserProfile,
    getUserProfile,
    getUsers,
    getUserUsersProfile,
    loginUser,
    updateUserProfile,
    updateUserRole,
} from "../../controllers/userController";
import { authMiddleware, verifyRole } from "../../Middlewares/auth";

const router = require("express").Router();



// User Routes

router.post("/login", loginUser);  // login 
router.get("/profile", authMiddleware, getUserProfile); // get loggedIn user's profile  
router.put("/updateProfile", authMiddleware, updateUserProfile); //update loggedIn user's profile - name email, password



router.post("/create-employee",authMiddleware,verifyRole(["HR","ADMIN"]), craeteUser);  // create employee profile - Only HR and Admin can create 
router.delete("/deleteProfile/",authMiddleware, verifyRole(["ADMIN", "HR"]), deleteUserProfile); // delete Employee profile 
router.get("/get-user/:id",authMiddleware,verifyRole(["HR","ADMIN"]), getUserUsersProfile);  // get profile by Id 
router.get("/get-all-users",authMiddleware,verifyRole(["ADMIN","HR"]), getUsers);  // fetch all users
router.put("/update-user-role" ,authMiddleware,verifyRole(["ADMIN","HR"]), updateUserRole); // update the users role 







export default router;
