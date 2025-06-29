import { z } from 'zod';

export const createUserValidation = z.object({
  userId: z
    .string({
      required_error: 'user id is required',
      invalid_type_error: 'user id must be a string',
    })
    .min(1, 'user id is required'),

  password: z
    .string({
      required_error: 'password is required',
      invalid_type_error: 'password must be a string',
    })
    .min(6, 'password must be at least 6 characters'),

  role: z.enum(['user', 'admin'], {
    required_error: 'role is required',
    invalid_type_error: 'role must be user or admin',
  }),

  email: z
    .string({
      required_error: 'email is required',
      invalid_type_error: 'email must be a string',
    })
    .email('email must be a valid email'),
});


export const userValidation = {
    createUserValidation,
}