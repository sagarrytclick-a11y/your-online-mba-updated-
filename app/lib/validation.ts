import { z } from 'zod';

export const counsellingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .regex(/^\d{10,15}$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  specialization: z.string().min(1, "Please select a specialization"),
  city: z.string().min(2, "City must be at least 2 characters"),
});

export type CounsellingFormData = z.infer<typeof counsellingSchema>;
