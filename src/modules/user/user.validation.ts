import { z } from "zod";
import { USER_Role, USER_Status } from "./user.constant";

const createAdminValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    role: z.nativeEnum(USER_Role).default(USER_Role.ADMIN),
    address: z.string(),
    status: z.nativeEnum(USER_Status).default(USER_Status.ACTIVE),
  }),
});
const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string().optional(),
    role: z.nativeEnum(USER_Role).optional(),
    address: z.string().optional(),
    status: z.nativeEnum(USER_Status).optional(),
  }),
});
export const UserValidation = {
  createAdminValidationSchema,
  updateUserValidationSchema,
};
