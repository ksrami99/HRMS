import UserRouter from "./UserRoutes/UserRouter";
import EmployeeRoutes from "./EmployeeRoutes/EmployeeRoutes";

const router = require("express").Router();

router.use("/user", UserRouter);
router.use("/employee", EmployeeRoutes);

export default router ;
