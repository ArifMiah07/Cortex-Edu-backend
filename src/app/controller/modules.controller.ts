// src/app/modules/module/module.controller.ts

import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { ModuleService } from '../services/modules.service';
import sendResponse from '../utils/sendResponse';
import { IModule } from '../model/modules.model';
import httpStatus from 'http-status';

export const ModuleController = {
  createModule: catchAsync(async (req: Request, res: Response) => {
    const result = await ModuleService.createModule(req.body);
    sendResponse<IModule>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Module created successfully',
      data: result,
    });
  }),

  getModulesByCourse: catchAsync(async (req: Request, res: Response) => {
    const courseId = req.params.courseId;
    const result = await ModuleService.getModulesByCourse(courseId);
    sendResponse<IModule[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Modules retrieved successfully',
      data: result,
    });
  }),

  updateModule: catchAsync(async (req: Request, res: Response) => {
    const moduleId = req.params.id;
    const payload = req.body;
    const result = await ModuleService.updateModule(moduleId, payload);
    sendResponse<IModule>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Module updated successfully',
      data: result,
    });
  }),

  deleteModule: catchAsync(async (req: Request, res: Response) => {
    const moduleId = req.params.id;
    await ModuleService.deleteModule(moduleId);
    sendResponse<null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Module deleted successfully',
      data: null,
    });
  }),
};
