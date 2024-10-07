export type userRole = "admin" | "user";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  bio?: string;
  phone: string;
  role: userRole;
  profilePicture?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  // followers?: string[];
  // following?: string[];
}
