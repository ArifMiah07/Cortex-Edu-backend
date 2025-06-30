

import mongoose from 'mongoose';
import { ILecture, Lecture } from '../model/lectures.model';

export const LectureService = {
  createLecture: async (payload: ILecture): Promise<ILecture> => {
    return await Lecture.create(payload);
  },

  getAllLectures: async (filters: any): Promise<ILecture[]> => {
    const query: any = {};

    if (filters.courseId && mongoose.Types.ObjectId.isValid(filters.courseId)) {
      query.courseId = filters.courseId;
    }

    if (filters.moduleId && mongoose.Types.ObjectId.isValid(filters.moduleId)) {
      query.moduleId = filters.moduleId;
    }

    return await Lecture.find(query).sort({ order: 1 });
  },

  getLecturesByCourse: async (courseId: string): Promise<ILecture[]> => {
    return await Lecture.find({ courseId }).sort({ order: 1 });
  },

  getLecturesByModule: async (moduleId: string): Promise<ILecture[]> => {
    return await Lecture.find({ moduleId }).sort({ order: 1 });
  },

  updateLecture: async (
    id: string,
    payload: Partial<ILecture>
  ): Promise<ILecture | null> => {
    return await Lecture.findByIdAndUpdate(id, payload, { new: true });
  },

  deleteLecture: async (id: string): Promise<void> => {
    await Lecture.findByIdAndDelete(id);
  },
};
