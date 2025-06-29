import { ObjectId } from "mongoose";


// Module Model
export interface IModule {
  title: string;
  moduleNumber: number;
  courseId: ObjectId;
}


import { Schema, model, Types } from 'mongoose';

const moduleSchema = new Schema<IModule>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  moduleNumber: {
    type: Number,
    required: true,
    min: 1,
  },
  courseId: {
    type: Types.ObjectId,
    required: true,
    ref: 'Course',
  },
}, {
  timestamps: true,
});

export const Module = model<IModule>('Module', moduleSchema);

