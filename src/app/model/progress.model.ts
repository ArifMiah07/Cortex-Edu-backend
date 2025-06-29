import { ObjectId } from "mongoose";

// Progress Model
export interface IProgress {
  userId: ObjectId;
  courseId: ObjectId;
  completedLectures: ObjectId[];
  currentLecture: ObjectId;
  progressPercentage: number;
}

import { Schema, model, Types } from 'mongoose';

const progressSchema = new Schema<IProgress>({
  userId: {
    type: Types.ObjectId,
    required: true,
    ref: 'User',
  },
  courseId: {
    type: Types.ObjectId,
    required: true,
    ref: 'Course',
  },
  completedLectures: [{
    type: Types.ObjectId,
    ref: 'Lecture',
    default: [],
  }],
  currentLecture: {
    type: Types.ObjectId,
    required: true,
    ref: 'Lecture',
  },
  progressPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
}, {
  timestamps: true,
});

export const Progress = model<IProgress>('Progress', progressSchema);
