import * as z from "zod";

// Validate form
export const UserOnboardingFormValidation = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name cannot be empty" })
    .max(30),
  lastName: z.string().min(1, { message: "Last name cannot be empty" }).max(30),
  username: z.string().min(6, { message: "Minimum 6 Characters" }).max(30),
});
