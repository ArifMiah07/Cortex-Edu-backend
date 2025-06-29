import { z } from 'zod';


const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const lectureValidationSchema = z.object({
  title: z.string().min(1, { message: "Lecture title is required" }).max(150),
  videoUrl: z.string().url({ message: "Video URL must be valid" }),
  pdfNotes: z.array(z.string().url({ message: "Each PDF note must be a valid URL" })).optional(),
  moduleId: z.string().regex(objectIdRegex, { message: "Invalid moduleId ObjectId" }),
  courseId: z.string().regex(objectIdRegex, { message: "Invalid courseId ObjectId" }),
  order: z.number().int().positive({ message: "Order must be a positive integer" }),
});
