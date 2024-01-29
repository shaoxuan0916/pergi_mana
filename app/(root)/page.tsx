import { isBusinessExists } from "@/lib/actions/business.actions";
import { isUserExists } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const HomePage = async () => {
  const user = await currentUser();

  if (user) {
    // If user / business exists in DB, means already onboarded
    // check current account is user / business account
    const isUserOnboarded = await isUserExists(user.id);
    const isBusinessOnboarded = await isBusinessExists(user.id);

    // If not, redirect to onboarding page
    if (!isUserOnboarded && !isBusinessOnboarded) redirect("/onboarding");

    // If it's business account, redirect to business routes
    if (isBusinessOnboarded) redirect("/business");
  }

  return (
    <section className="bg-white p-4 md:p-8 max-w-[1440px] mx-auto">
      <div className="">Home Page</div>
    </section>
  );
};

export default HomePage;
