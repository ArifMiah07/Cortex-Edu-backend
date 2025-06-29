import { Request, Response } from 'express';
import { userServices } from '../services/user.service';

// create user
const createUser = async (req: Request, res: Response) => {
  try {
      console.log(req.body);
    const result = await userServices.createUserIntoDb(req.body);
    res.status(200).json({
      status: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error.message || 'something went wrong!',
      error: error,
    });
  }
};

// get all user
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersFromDb();
    res.status(200).json({
      status: true,
      message: 'user retrieved successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error.message || 'something went wrong!',
      error: error,
    });
  }
};

export const userControllers = {
  createUser,
  getAllUsers,
};
