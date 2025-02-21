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


export const deleteProfuleSchema = zod.string();