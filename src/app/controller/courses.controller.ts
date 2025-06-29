import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import httpStatus from 'http-status';
import { courseServices } from "../services/courses.service";

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await courseServices.createCourseIntoDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully!',
    data: result,
  });
});

const getAllCourses = catchAsync(async (_req: Request, res: Response) => {
  const result = await courseServices.getAllCoursesFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved successfully!',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req: Request, res: Response) => {
  const courseId = req.query.courseId as string;
  const result = await courseServices.getSingleCourseFromDb(courseId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved successfully!',
    data: result,
  });
});

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const courseId = req.query.courseId as string;
  const updatedData = req.body;
  const result = await courseServices.updateCourseInDb(courseId, updatedData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully!',
    data: result,
  });
});

const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const courseId = req.query.courseId as string;
  const result = await courseServices.deleteCourseFromDb(courseId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully!',
    data: result,
  });
});

export const courseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
