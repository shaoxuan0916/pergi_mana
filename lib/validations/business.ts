import { BusinessCategory, State } from "@/types";
import * as z from "zod";

// Validate form

const phoneRegex = new RegExp(
  // /^[0-9]-?[0-9]{8,9}$/
  /^[\+]?[(]?[0-9]{2,3}[)]?[-\s]?[0-9]{2,3}[-\s]?[0-9]{2,7}$/
);

export const BusinessOnboardingFormValidation = z.object({
  businessName: z
    .string()
    .min(1, { message: "Business name cannot be empty" })
    .max(30),
  address: z.string().min(1, { message: "Address cannot be empty" }).max(100),
  state: z.nativeEnum(State),
  category: z.nativeEnum(BusinessCategory),
  contactNumber: z.string().regex(phoneRegex, {
    message: "Please enter a valid phone number",
  }),
});
