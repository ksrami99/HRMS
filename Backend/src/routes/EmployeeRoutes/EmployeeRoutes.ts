import {
    createEmployee,
    getEmployeeById,
    getEmployees,
    removeEmployee,
    updateEmployee,
} from "../../controllers/employeeController";
import { authMiddleware, verifyRole } from "../../Middlewares/auth";

const router = require("express").Router();

router.post(
    "/createEmployee",
    authMiddleware,
    verifyRole(["ADMIN", "HR"]),
    createEmployee
);
router.get("/", authMiddleware, verifyRole(["HR", "ADMIN"]), getEmployees);
router.get(
    "/:id",
    authMiddleware,
    verifyRole(["HR", "ADMIN"]),
    getEmployeeById
);
router.put("/:id", authMiddleware, verifyRole(["HR", "ADMIN"]), updateEmployee);
router.delete(
    "/:id",
    authMiddleware,
    verifyRole(["HR", "ADMIN"]),
    removeEmployee
);

export default router;
