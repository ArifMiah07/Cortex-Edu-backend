import { ObjectId } from "mongoose";

// Lecture Model
export interface ILecture {
  title: string;
  videoUrl: string; // YouTube embed URL
  pdfNotes: string[]; // Array of PDF URLs
  moduleId: ObjectId;
  courseId: ObjectId;
  order: number; // For sequential unlocking
}


import { Schema, model, Types } from 'mongoose';

const lectureSchema = new Schema<ILecture>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  videoUrl: {
    type: String,
    required: true,
    trim: true,
  },
  pdfNotes: [{
    type: String,
    trim: true,
  }],
  moduleId: {
    type: Types.ObjectId,
    required: true,
    ref: 'Module',
  },
  courseId: {
    type: Types.ObjectId,
    required: true,
    ref: 'Course',
  },
  order: {
    type: Number,
    required: true,
    min: 1,
  },
}, {
  timestamps: true,
});

export const Lecture = model<ILecture>('Lecture', lectureSchema);

