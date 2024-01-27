import { Schema, model, models } from "mongoose";

const BusinessSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  businessUsername: { type: String, required: true, unique: true },
  businessFullName: { type: String, required: true },
  photo: { type: String, required: true },
});

const Business = models.Business || model("Business", BusinessSchema);

export default Business;
