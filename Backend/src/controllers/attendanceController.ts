import { PrismaClient } from "@prisma/client";
import { idSchema } from "../validations/inputValidations";
const prisma = new PrismaClient();


export const getAttandance = (req:any, res:any) => {
    const attendance = prisma.attendance.findMany({
        include:{
            employee: true,
        }
    })
}

export const getEmployeeAttandance = (req: any, res: any) => {
    const { id } = req.params;

    const employee = prisma.attendance.findMany({
        where: {
            id: id,
            checkIn: {
                equals: new Date(),
            },
        },
    });

    if (!employee) {
        return res.status(400).json({
            message: "Something want wrong!",
        });
    }

    res.json({
        data: employee,
    });
};

export const CheckIn = async (req: any, res: any) => {
    const { id } = req.params;

    const { success } = idSchema.safeParse(id);

    if (!success) {
        return res.status(400).json({
            message: "Invalid Inputs",
        });
    }

    const attendance = await prisma.attendance.create({
        data: {
            employeeId: id,
        },
    });

    if (!attendance) {
        res.status(500).json({
            message: "Something went wrong!",
        });
    }

    res.json({
        data: attendance,
    });
};

export const CheckOut = async (req: any, res: any) => {
    const { id } = req.params;

    const { success } = idSchema.safeParse(id);

    if (!success) {
        return res.status(400).json({
            message: "Invalid Inputs",
        });
    }

    const attendance = await prisma.attendance.update({
        where: {
            id: id,
        },
        data: {},
    });

    if (!attendance) {
        res.status(500).json({
            message: "Something went wrong!",
        });
    }

    res.json({
        data: attendance,
    });
};
