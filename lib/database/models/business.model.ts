import { BusinessCategory, State } from "@/types";
import { Schema, model, models } from "mongoose";

const BusinessSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  uid: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  businessName: { type: String, required: true },
  address: { type: String, required: true },
  state: {
    type: String,
    required: true,
    enum: Object.values(State), // Use the enum property with the values from State
  },
  category: {
    type: String,
    required: true,
    enum: Object.values(BusinessCategory), // Use the enum property with the values from BusinessCategory
  },
  contactNumber: { type: String, required: true },
  createdAt: { type: String, required: true },
  imageUrl: { type: String, required: true },
  onboarded: {
    type: Boolean,
    default: false,
  },
});

const Business = models.Business || model("Business", BusinessSchema);

export default Business;
