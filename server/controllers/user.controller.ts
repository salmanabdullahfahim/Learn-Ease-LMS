import { Request, Response, NextFunction } from "express";
import userModel, { IUser } from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { catchAsyncError } from "../middleware/catchAsyncErrors";

//register user
interface IRegisterBody {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}
