import { ObjectId } from 'mongoose';

// Course Model
export interface ICourse {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  createdBy: ObjectId; // Admin who created
  isActive: boolean;
}


import { Schema, model, Types } from 'mongoose';

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, 
  },
  thumbnail: {
    type: String,
    required: true,
    trim: true,
  },
  createdBy: {
    type: Types.ObjectId,
    required: true,
    ref: 'Admin',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export const Course = model<ICourse>('Course', courseSchema);


