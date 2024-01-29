"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import * as z from "zod";
import { useState } from "react";
import { createUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";

interface OnboardingFormProps {
  userData: {
    clerkId: string;
    uid: string;
    createdAt: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
  };
}

const OnboardingForm = ({ userData }: OnboardingFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [accountType, setAccountType] = useState<"business" | "user">("user");

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      username: userData?.username || "",
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    // console.log(values)

    setLoading(true);

    try {
      await createUser({
        clerkId: userData?.clerkId,
        uid: userData?.uid,
        username: values.username,
        createdAt: userData?.createdAt,
        email: userData?.email,
        firstName: values.firstName,
        lastName: values.lastName,
        imageUrl: userData?.imageUrl,
        onboarded: true,
      });

      setLoading(false);
      toast.success("You've successful completed your onboarding!");
      router.push("/");
    } catch (error) {
      setLoading(false);
      toast.error("Username already exists.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 w-full">
              <FormLabel className="">First Name</FormLabel>

              <div>
                <FormControl>
                  <Input type="text" className="no-focus" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 w-full">
              <FormLabel className="">Last Name</FormLabel>
              <div>
                <FormControl>
                  <Input type="text" className="no-focus" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 w-full">
              <FormLabel className="">Username</FormLabel>

              <div>
                <FormControl>
                  <Input type="text" className="no-focus" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-primary-500">
          {loading && <Spinner />}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default OnboardingForm;
