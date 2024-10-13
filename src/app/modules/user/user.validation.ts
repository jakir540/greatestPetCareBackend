import { z } from "zod";

// Validation schema for user signup
const createUserValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }), // name is required
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .min(1, { message: "Email is required" }), // Valid email required
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }), // Password with min length 6
  bio: z.string().optional(), // bio is optional
  phone: z.string().min(1, { message: "Phone is required" }), // Phone is required
  profilePicture: z
    .string()
    .url({ message: "Invalid profile picture URL" })
    .optional(), // Profile picture is optional but must be a valid URL
  role: z.enum(["admin", "user"]).optional(), // Role is optional, defaults to 'user' if not provided
});

const UpdateUserValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name must be at least 1 character long" })
    .optional(), // Name is optional
  email: z.string().email({ message: "Invalid email format" }).optional(), // Valid email is optional
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }) // Password with min length 6 is optional
    .optional(),
  bio: z.string().optional(), // Bio is optional
  phone: z.string().optional(), // Phone is optional
  profilePicture: z
    .string()
    .url({ message: "Invalid profile picture URL" })
    .optional(), // Profile picture is optional but must be a valid URL
  role: z.enum(["admin", "user"]).optional(), // Role is optional
});
// Validation schema for user login
const UserLoginValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid Email" })
    .min(1, { message: "Email is required" }), // Valid email
  password: z.string().min(1, { message: "Password is required" }), // Password required
});

export const AuthValidation = {
  UserLoginValidationSchema,
  createUserValidationSchema,
  UpdateUserValidationSchema,
};
