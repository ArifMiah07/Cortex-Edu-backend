import { ObjectId } from "mongoose";

export type Progress = {
  courseId: ObjectId;       // ref: course
  completedLectures: ObjectId[]; // ref: lecture
};

export type TUser = {
    id: string;
    name: string;
    email: string;
    password : string;
    needPasswordChange: boolean;
    role: 'user' | 'admin';
    enrolledCourses: ObjectId[];
    progress: Progress[];
    isDeleted: boolean;
}