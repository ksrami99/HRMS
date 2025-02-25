import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import {
    registerEmployeeSchema,
    updateProfileSchema,
} from "../validations/inputValidations";

export const createEmployee = async (req: any, res: any) => {
    const { success } = registerEmployeeSchema.safeParse(req.body);
    const {
        userId,
        department,
        designation,
        dateOfJoining,
        contectNo,
        address,
    } = req.body;

    if (!success) {
        return res.status(400).json({ message: "Invalid data" });
    }

    const employee = await prisma.employee.create({
        data: {
            userId,
            department,
            designation,
            dateOfJoining,
            contectNo,
            address,
        },
    });

    if (!employee) {
        return res.status(400).json({ message: "User not created" });
    }

    res.json({
        data: employee,
    });
};

export const getEmployees = async (req: any, res: any) => {

    const employees = await prisma.employee.findMany({
        include: {
            leave: true,
            attendance: true,
            user: true,
        },
    });

    if (!employees) {
        return res.status(400).json({
            message: "Data Not Found!",
        });
    }

    res.status(200).json({
        employees,
    });
};

export const getEmployeeById = async (req: any, res: any) => {
    const { id } = req.params;

    const employee = await prisma.employee.findUnique({
        where: {
            id: id,
        },
        include: {
            leave: true,
            attendance: true,
            user: true,
        },
    });

    if (!employee) {
        return res.status(400).json({
            message: "Data Not Found!",
        });
    }
    res.status(200).json({
        employee,
    });
};

export const updateEmployee = async (req: any, res: any) => {
    const { id } = req.params;

    const { success } = updateProfileSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({ message: "Invalid data" });
    }

    const employee = await prisma.employee.update({
        where: {
            id: id,
        },
        data: req.body,
    });

    if (!employee) {
        return res.status(400).json({
            message: "Something want wrong",
        });
    }
};

export const removeEmployee = async (req: any, res: any) => {
    const { id } = req.params;

    const employee = await prisma.employee.delete({
        where: {
            id: id,
        },
    });

    if (!employee) {
        return res.status(400).json({
            message: "Something want wrong",
        });
    }

    return res.json({
        employee,
    });
};
