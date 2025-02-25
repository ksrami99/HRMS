import { CheckIn, CheckOut, getAttandance, getEmployeeAttandance } from "../../controllers/attendanceController";
import { authMiddleware, verifyRole } from "../../Middlewares/auth";

const router = require("express").Router();

router.get("/",authMiddleware,verifyRole(["HR", "ADMIN"]), getAttandance);
router.get("/:id",authMiddleware,verifyRole(["HR", "ADMIN", "Employee"]), getEmployeeAttandance);
router.post("/checkIn", authMiddleware, CheckIn);
router.put("/checkOut" , authMiddleware, CheckOut)

export default router;
