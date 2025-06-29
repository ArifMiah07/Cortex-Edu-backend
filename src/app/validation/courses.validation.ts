import { z } from 'zod';

// Simple ObjectId regex validation (24 hex chars)
const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const courseValidationSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).max(100, { message: "Title too long" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().nonnegative({ message: "Price must be zero or positive" }),
  thumbnail: z.string().url({ message: "Thumbnail must be a valid URL" }),
  createdBy: z.string().regex(objectIdRegex, { message: "Invalid ObjectId format" }),
  isActive: z.boolean().optional(),
});
