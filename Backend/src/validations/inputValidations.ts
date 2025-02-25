const zod = require('zod');

export const signUpSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
    name: zod.string().min(2),
});

export const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

export const updateProfileSchema = zod.object({
  email: zod.string().email().optional(),
  name: zod.string().min(2).optional(),
  password: zod.string().min(6).optional(),
});


export const registerEmployeeSchema = zod.object({
  userId : zod.string(),
  department : zod.string(),
  designation: zod.string(),
  dateOfJoining: zod.DateTime(),
  contectNo: zod.string(),
  address: zod.string(),
}) 

export const updateEmployeeSchema = zod.object({
  userId : zod.string().optional(),
  department : zod.string().optional(),
  designation: zod.string().optional(),
  dateOfJoining: zod.DateTime().optional(),
  contectNo: zod.string().optional(),
  address: zod.string().optional(),
}) 


export const deleteProfuleSchema = zod.string();