import { Request, Response } from 'express';
import { userServices } from '../services/user.service';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';
import httpStatus from 'http-status';

// create user
const createUser = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await userServices.createUserIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user is created successfully!',
    data: result,
  });
});

// get all user
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getAllUsersFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user was retrieved successfully!',
    data: result,
  });
});
// get all user
const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getAllAdminsFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin was retrieved successfully!',
    data: result,
  });
});

export const userControllers = {
  createUser,
  getAllUsers,
  getAllAdmins,
};
