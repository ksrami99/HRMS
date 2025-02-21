const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import {
    deleteProfuleSchema,
    loginSchema,
    signUpSchema,
    updateProfileSchema,
} from "../validations/inputValidations";

export const registerUser = async (req: any, res: any) => {
    let { email, password, name } = req.body;
    const { success } = signUpSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid data" });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    password = hash;

    const newUser = await prisma.user.create({
        data: {
            email,
            password,
            name,
        },
    });

    const token = jwt.sign(
        {
            id: newUser.id,
            role: newUser.role,
        },
        process.env.JWT_SECRET
    );

    if (!newUser) {
        return res.status(400).json({ message: "User not created" });
    }

    res.json({
        data: newUser,
        token,
    });
};

export const loginUser = async (req: any, res: any) => {
    const { email, password } = req.body;
    const { success } = loginSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid data" });
    }

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    const token = jwt.sign(
        {
            id: user.id,
            role: user.role,
        },
        process.env.JWT_SECRET
    );

    if (isMatch) {
        res.json({
            data: user,
            token,
        });
        return;
    }

    res.json({
        msg: "Wrong password!",
    });
};

export const getUserProfile = async (req: any, res: any) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.id,
        },
    });

    if (!user) {
        res.status(400).json({ message: "User not found" });
    }

    res.json({
        data: user,
    });
};

export const updateUserProfile = async (req: any, res: any) => {
    const { name, password, email } = req.body;

    const { success } = updateProfileSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({ message: "Invalid data" });
    }

    const user = await prisma.user.update({
        where: {
            id: req.id,
        },
        data: {
            name,
            password,
            email,
        },
    });

    if (!user) {
        res.status(400).json({ message: "User not found" });
    }

    res.json({
        data: user,
    });
};

export const deleteUserProfile = async (req: any, res: any) => {
    const admin = await prisma.user.findUnique({
        where: {
            id: req.id,
        },
    });

    if (!admin) {
        return res.status(404).json({ message: "admin not found" });
    }

    if (admin.role !== "ADMIN") {
        return res
            .status(405)
            .json({ message: "Only tha admin can delete the user" });
    }

    const { success } = deleteProfuleSchema.safeParse(req.params.id);

    if (!success) {
        return res.status(400).json({ message: "Invalid data" });
    }

    const user = await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({
        message: "User deleted",
        data: user,
    });
};




export const getUsers = async (req:any, res:any ) => {

    const userId = req.id;
  
    const user = await prisma.user.findUnique({
      where: {
        id : userId
      }
    });
  
    if(!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }
    const employees = await prisma.user.findMany();
  
    return res.status(200).json({
      employees
    })
  }