import OnboardingForm from "@/components/forms/OnboardingForm";
import { isBusinessExists } from "@/lib/actions/business.actions";
import { isUserExists } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();
  if (!user) return redirect("/sign-in"); // to avoid typescript warnings

  // If user exists in DB, means already onboarded
  const isUserOnboarded = await isUserExists(user.id);
  const isBusinessOnboarded = await isBusinessExists(user.id);

  if (isUserOnboarded || isBusinessOnboarded) redirect("/");

  const userData = {
    clerkId: user?.id,
    uid: user?.id,
    createdAt: user?.createdAt,
    email: user?.emailAddresses[0].emailAddress,
    username: user?.username || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    imageUrl: user?.imageUrl || "",
  };

  return (
    <main className="px-4 py-8">
      <h1 className="text-[24px] font-semibold mb-4">
        Welcome <span className="text-[24px]">{user?.lastName}</span> ,
      </h1>

      <p className="mt-3 text-[16px] font-medium">
        Complete your profile to use{" "}
        <span className="font-semibold">PergiMana</span>
      </p>

      <section className="mt-10">
        <OnboardingForm userData={userData} />
      </section>
    </main>
  );
}

export default Page;
