import { isUserExists } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const BusinessHomePage = async () => {
  // const user = await currentUser();

  // if (user) {
  //   // If user exists in DB, means already onboarded
  //   const isUserOnboarded = await isUserExists(user.id);
  //   // If not, redirect to onboarding page
  //   if (!isUserOnboarded) redirect("/onboarding");
  // }

  return (
    <section className="bg-white p-4 md:p-8 max-w-[1440px] mx-auto">
      <div className="">Business Home Page</div>
    </section>
  );
};

export default BusinessHomePage;
