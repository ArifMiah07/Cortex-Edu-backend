import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import { User } from '../model/user.model';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';
import httpStatus from 'http-status';

// register user
export const registerUser = catchAsync(async (req: Request, res: Response) => {
  const { userId, email, password, role } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    sendResponse(res, {
      statusCode: httpStatus.CONFLICT,
      success: false,
      message: 'User already exists',
      data: null,
    });
    return;
  }

  const newUser = new User({ userId, email, password, role });
  await newUser.save();

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'User registered successfully',
    data: newUser,
  });
});

// login user
export const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'Invalid email or password',
      data: null,
    });
    return;
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'Invalid email or password',
      data: null,
    });
    return;
  }

  const token = jwt.sign(
    { _id: user._id, role: user.role },
    config.JWT_SECRET!,
    { expiresIn: '1d' },
  );
  
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: config.NODE_ENV !== 'development',
    sameSite: "strict",
    maxAge: 24*60*60*1000, //1 day
  })


// const { password: _removed, ...userWithoutPassword } = user.toObject();

sendResponse(res, {
  statusCode: httpStatus.CREATED,
  message: 'Login successful',
  token,
  data: {
    _id: user._id,
    email: user.email,
    role: user.role,
  },
});
});

export const UserAuth = {
  registerUser,
  loginUser,
};
