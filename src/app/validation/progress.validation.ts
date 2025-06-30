import { z } from 'zod';


const objectIdRegex = /^[0-9a-fA-F]{24}$/;

const createProgressValidationSchema = z.object({
  userId: z.string().regex(objectIdRegex, { message: "Invalid userId ObjectId" }),
  courseId: z.string().regex(objectIdRegex, { message: "Invalid courseId ObjectId" }),
  completedLectures: z.array(z.string().regex(objectIdRegex, { message: "Invalid lectureId in completedLectures" })).optional(),
  currentLecture: z.string().regex(objectIdRegex, { message: "Invalid currentLecture ObjectId" }),
  progressPercentage: z.number().min(0).max(100),
});
const updateProgressValidationSchema = z.object({
  userId: z.string().regex(objectIdRegex, { message: "Invalid userId ObjectId" }).optional(),
  courseId: z.string().regex(objectIdRegex, { message: "Invalid courseId ObjectId" }).optional(),
  completedLectures: z.array(z.string().regex(objectIdRegex, { message: "Invalid lectureId in completedLectures" })).optional(),
  currentLecture: z.string().regex(objectIdRegex, { message: "Invalid currentLecture ObjectId" }).optional(),
  progressPercentage: z.number().min(0).max(100).optional(),
});



export const progressValidation = {
createProgressValidationSchema,
updateProgressValidationSchema,
}