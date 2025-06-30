

import mongoose from 'mongoose';
import { IModule, Module } from '../model/modules.model';

export const ModuleService = {
  createModule: async (payload: IModule): Promise<IModule> => {
    return await Module.create(payload);
  },

  getModulesByCourse: async (courseId: string): Promise<IModule[]> => {
    return await Module.find({ courseId: new mongoose.Types.ObjectId(courseId) })
      .sort({ moduleNumber: 1 });
  },

  updateModule: async (id: string, payload: Partial<IModule>): Promise<IModule | null> => {
    return await Module.findByIdAndUpdate(id, payload, { new: true });
  },

  deleteModule: async (id: string): Promise<void> => {
    await Module.findByIdAndDelete(id);
  },
};
