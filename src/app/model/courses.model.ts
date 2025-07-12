import { ObjectId } from 'mongoose';

// Course Model
export interface ICourse {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  createdBy: ObjectId; // Admin who created
  isActive: boolean;
  isPublished?: boolean;
  isPrivate?: boolean;
  isDeleted?: false,
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
    ref: 'Admin',//hmm...todo
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isPrivate: {
    type: Boolean,
    default: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  isDeleted:{
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
});

// soft delete
// filter out deleted documents
courseSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

courseSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

courseSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const Course = model<ICourse>('Course', courseSchema);


