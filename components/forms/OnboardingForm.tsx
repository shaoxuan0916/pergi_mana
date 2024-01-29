"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserOnboardingFormValidation } from "@/lib/validations/user";
import * as z from "zod";
import { useState } from "react";
import { createUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";
import { BusinessOnboardingFormValidation } from "@/lib/validations/business";
import { createBusiness } from "@/lib/actions/business.actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { State } from "@/types";

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
  const [accountType, setAccountType] = useState<"business" | "user" | null>(
    null
  );

  const handleAccountType = (type: "business" | "user") => {
    setAccountType(type);
  };

  if (accountType === null) {
    return (
      <div className="flex flex-col gap-4">
        <Button
          type="button"
          size="lg"
          className="bg-primary-500"
          onClick={() => handleAccountType("user")}
        >
          Begin as an Explorer
        </Button>
        <Button
          type="button"
          size="lg"
          variant="secondary"
          className="bg-gray-200"
          onClick={() => handleAccountType("business")}
        >
          Begin as a Business
        </Button>
      </div>
    );
  }

  if (accountType === "user") {
    return <UserOnboardingForm userData={userData} />;
  }

  if (accountType === "business") {
    return <BusinessOnboardingForm userData={userData} />;
  }
};

export default OnboardingForm;

const UserOnboardingForm = ({ userData }: OnboardingFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(UserOnboardingFormValidation),
    defaultValues: {
      username: userData?.username || "",
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof UserOnboardingFormValidation>
  ) => {
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
            <FormItem className="flex flex-col gap-1 w-full">
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
            <FormItem className="flex flex-col gap-1 w-full">
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
            <FormItem className="flex flex-col gap-1 w-full">
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

const BusinessOnboardingForm = ({ userData }: OnboardingFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(BusinessOnboardingFormValidation),
    defaultValues: {
      businessName: "",
      address: "",
      state: "Sel",
      category: undefined,
      contactNumber: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof BusinessOnboardingFormValidation>
  ) => {
    // console.log(values)

    setLoading(true);

    try {
      await createBusiness({
        clerkId: userData?.clerkId,
        uid: userData?.uid,
        businessName: values.businessName,
        createdAt: userData?.createdAt,
        email: userData?.email,
        category: values.category,
        address: values.address,
        state: values.state,
        contactNumber: values.contactNumber,
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
        // @ts-ignore ignore category default undefined value
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-6"
      >
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 w-full">
              <FormLabel className="">Business Name</FormLabel>

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
          name="contactNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 w-full">
              <FormLabel className="">Contact Number</FormLabel>

              <div>
                <FormControl>
                  <Input type="number" className="no-focus" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 w-full">
              <FormLabel className="">Full Address</FormLabel>
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
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="bg-white">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent className="bg-white no-focus">
                  {Object.values(State).map((state) => (
                    <SelectItem key={state} value={state}>
                      {state.replace("_", " ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="bg-white">
                  <SelectTrigger>
                    <SelectValue placeholder="Select category of your business" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="FOOD_AND_BEVERAGE">
                    FOOD AND BEVERAGE
                  </SelectItem>
                  <SelectItem value="BEAUTY_INDUSTRY">
                    BEAUTY INDUSTRY
                  </SelectItem>
                  <SelectItem value="WORKSHOP">WORKSHOP</SelectItem>
                  <SelectItem value="TRAINING_CENTRE">
                    TRAINING CENTRE
                  </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-primary-500 mt-12">
          {loading && <Spinner />}
          Submit
        </Button>
      </form>
    </Form>
  );
};
