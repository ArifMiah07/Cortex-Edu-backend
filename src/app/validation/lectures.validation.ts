import { z } from 'zod';


const objectIdRegex = /^[0-9a-fA-F]{24}$/;

const createLectureValidationSchema = z.object({
  title: z.string().min(1, { message: "Lecture title is required" }).max(150),
  videoUrl: z.string().url({ message: "Video URL must be valid" }),
  pdfNotes: z.array(z.string().url({ message: "Each PDF note must be a valid URL" })).optional(),
  moduleId: z.string().regex(objectIdRegex, { message: "Invalid moduleId ObjectId" }),
  courseId: z.string().regex(objectIdRegex, { message: "Invalid courseId ObjectId" }),
  order: z.number().int().positive({ message: "Order must be a positive integer" }),
});
const updateLectureValidationSchema = z.object({
  title: z.string().min(1).max(150).optional(),
  videoUrl: z.string().url({ message: "Video URL must be valid" }).optional(),
  pdfNotes: z.array(z.string().url({ message: "Each PDF note must be a valid URL" })).optional(),
  moduleId: z.string().regex(objectIdRegex, { message: "Invalid moduleId ObjectId" }).optional(),
  courseId: z.string().regex(objectIdRegex, { message: "Invalid courseId ObjectId" }).optional(),
  order: z.number().int().positive({ message: "Order must be a positive integer" }).optional(),
});


export const lectureValidation = {
  createLectureValidationSchema,
  updateLectureValidationSchema,
}