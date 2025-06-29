import { ObjectId } from "mongoose";

export type Progress = {
  courseId: ObjectId; // ref: course
  completedLectures: ObjectId[]; // ref: lecture
};

export type TUser = {
    userId: string;
    name: string;
    email: string;
    password : string;
    role: 'user' | 'admin';
    // needPasswordChange: boolean;
    // enrolledCourses: ObjectId[];
    // progress: Progress[];
    // isDeleted: boolean;
}

// // User Model
// interface IUser {
//   name: string;
//   email: string;
//   password: string;
//   role: 'admin' | 'user';
//   createdAt: Date;
//   updatedAt: Date;
// }
