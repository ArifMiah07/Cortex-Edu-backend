// src/app/modules/lecture/lecture.controller.ts

import { Request, Response } from 'express';

import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';
import { LectureService } from '../services/lectures.service';
import { ILecture } from '../model/lectures.model';

export const LectureController = {
  createLecture: catchAsync(async (req: Request, res: Response) => {
    const result = await LectureService.createLecture(req.body);
    sendResponse<ILecture>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Lecture created successfully',
      data: result,
    });
  }),

  getAllLectures: catchAsync(async (req: Request, res: Response) => {
    const filters = req.query;
    const result = await LectureService.getAllLectures(filters);
    sendResponse<ILecture[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Lectures retrieved successfully',
      data: result,
    });
  }),

  getLecturesByCourse: catchAsync(async (req: Request, res: Response) => {
    const courseId = req.params.courseId;
    const result = await LectureService.getLecturesByCourse(courseId);
    sendResponse<ILecture[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Lectures retrieved by course',
      data: result,
    });
  }),

  getLecturesByModule: catchAsync(async (req: Request, res: Response) => {
    const moduleId = req.params.moduleId;
    const result = await LectureService.getLecturesByModule(moduleId);
    sendResponse<ILecture[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Lectures retrieved by module',
      data: result,
    });
  }),

  updateLecture: catchAsync(async (req: Request, res: Response) => {
    const lectureId = req.params.id;
    const payload = req.body;
    const result = await LectureService.updateLecture(lectureId, payload);
    sendResponse<ILecture>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Lecture updated successfully',
      data: result,
    });
  }),

  deleteLecture: catchAsync(async (req: Request, res: Response) => {
    const lectureId = req.params.id;
    await LectureService.deleteLecture(lectureId);
    sendResponse<null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Lecture deleted successfully',
      data: null,
    });
  }),
};
