"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";

import { CreateBusinessParams, UpdateBusinessParams } from "@/types";
import Business from "../database/models/business.model";

// Check is business already exists in DB
export async function isBusinessExists(businessId: string) {
  try {
    await connectToDatabase();

    const isBusinessExists = await Business.exists({ clerkId: businessId });
    return JSON.parse(JSON.stringify(isBusinessExists));
  } catch (error) {
    handleError(error);
  }
}

// Create business
export async function createBusiness(business: CreateBusinessParams) {
  try {
    await connectToDatabase();

    const newBusiness = await Business.create(business);
    return JSON.parse(JSON.stringify(newBusiness));
  } catch (error) {
    handleError(error);
  }
}

// Get business by uid
export async function getBusinessById(businessId: string) {
  try {
    await connectToDatabase();

    const business = await Business.findById(businessId);

    if (!business) throw new Error("Business not found");
    return JSON.parse(JSON.stringify(business));
  } catch (error) {
    handleError(error);
  }
}

// Update Business
export async function updateBusiness(
  clerkId: string,
  business: UpdateBusinessParams
) {
  try {
    await connectToDatabase();

    const updatedBusiness = await Business.findOneAndUpdate(
      { clerkId },
      business,
      {
        new: true,
      }
    );

    if (!updatedBusiness) throw new Error("Business update failed");
    return JSON.parse(JSON.stringify(updatedBusiness));
  } catch (error) {
    handleError(error);
  }
}

// Delete Business
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find Business to delete
    const businessToDelete = await Business.findOne({ clerkId });

    if (!businessToDelete) {
      throw new Error("Business not found");
    }

    // Delete Business
    const deletedBusiness = await Business.findByIdAndDelete(
      businessToDelete._id
    );
    revalidatePath("/");

    return deletedBusiness ? JSON.parse(JSON.stringify(deletedBusiness)) : null;
  } catch (error) {
    handleError(error);
  }
}
