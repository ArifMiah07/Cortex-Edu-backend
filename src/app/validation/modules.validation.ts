import { z } from 'zod';

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const moduleValidationSchema = z.object({
  title: z.string().min(1, { message: "Module title is required" }).max(100),
  moduleNumber: z.number().int().positive({ message: "Module number must be a positive integer" }),
  courseId: z.string().regex(objectIdRegex, { message: "Invalid courseId ObjectId" }),
});
