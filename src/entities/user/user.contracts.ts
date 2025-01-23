import { z } from 'zod';
import { AchievementSchema } from './../achievements/achievements.contracts';

export const LoginUserDtoSchema = z.object({
  username: z.string(),
  password: z.string().min(6, 'Пароль должен состоять минимум из 6 символов'),
});

export const createUserSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(3, 'Псевдоним должен состоять минимум из 6 символов'),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string().min(6, 'Пароль должен состоять минимум из 6 символов'),
});

export const editUserSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  photo: z.instanceof(File).optional(),
});

export const ActivationData = z.object({
  uid: z.string(),
  token: z.string(),
});

export const UpdatePassword = z.object({
  uid: z.string(),
  token: z.string(),
  newPassword: z
    .string()
    .min(6, 'Пароль должен состоять минимум из 6 символов'),
  confirmPassword: z.string(),
});

export const TokensDtoSchema = z.object({
  access: z.string(),
  refresh: z.string(),
});

export const SendEmail = z.object({
  email: z
    .string()
    .email('Введите действительный  email')
    .min(1, 'Введите ваш  email'),
});



export const UserDtoSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  firstName: z.string(),
  username: z.string(),
  lastName: z.string(),
  role: z.string(),
  photo: z.string(),
  group:z.string(),
  rating:z.number(),
  points:z.number(),
  achiviementsCount:z.number(),
  achievements: z.array(AchievementSchema), 
});