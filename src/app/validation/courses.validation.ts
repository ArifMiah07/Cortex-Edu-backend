import { z } from 'zod';

// Simple ObjectId regex validation (24 hex chars)
const objectIdRegex = /^[0-9a-fA-F]{24}$/;

// validation for data creation
const createCourseValidationSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).max(100, { message: "Title too long" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().nonnegative({ message: "Price must be zero or positive" }),
  thumbnail: z.string().url({ message: "Thumbnail must be a valid URL" }),
  createdBy: z.string().regex(objectIdRegex, { message: "Invalid ObjectId format" }),
  isPrivate: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  isActive: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
});

// validation for data update
const updateCourseValidationSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).max(100, { message: "Title too long" }).optional(),
  description: z.string().min(1, { message: "Description is required" }).optional(),
  price: z.number().nonnegative({ message: "Price must be zero or positive" }).optional(),
  thumbnail: z.string().url({ message: "Thumbnail must be a valid URL" }).optional(),
  createdBy: z.string().regex(objectIdRegex, { message: "Invalid ObjectId format" }).optional(),
  isPrivate: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  isActive: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
});

export const courseValidation = {
    createCourseValidationSchema,
    updateCourseValidationSchema,
}