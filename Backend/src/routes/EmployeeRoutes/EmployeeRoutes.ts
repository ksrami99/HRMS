// import { getEmployees } from "../../controllers/employeeController";
import { authMiddleware } from "../../Middlewares/auth";


const router = require("express").Router();

// router.get("/", authMiddleware, getEmployees);

export default router;
