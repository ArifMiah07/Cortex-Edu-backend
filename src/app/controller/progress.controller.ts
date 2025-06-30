

import { Request, Response } from 'express';

import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';
import { IProgress } from '../model/progress.model';
import { ProgressService } from '../services/progress.service';

export const ProgressController = {
  getUserProgress: catchAsync(async (req: Request, res: Response) => {
    const userId = req.user?._id?.toString();
    const courseId = req.params.courseId;

    if (!userId || !courseId) {
      throw new Error('userId or courseId is missing');
    }

    const result = await ProgressService.getUserProgress(userId, courseId);

    sendResponse<IProgress | null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User progress retrieved successfully',
      data: result,
    });
  }),

  markLectureComplete: catchAsync(async (req: Request, res: Response) => {
    const result = await ProgressService.markLectureComplete(req.body);

    sendResponse<IProgress>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Lecture marked as complete',
      data: result,
    });
  }),

  updateProgress: catchAsync(async (req: Request, res: Response) => {
    const result = await ProgressService.updateProgress(req.body);

    sendResponse<IProgress>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Progress updated successfully',
      data: result,
    });
  }),
};
