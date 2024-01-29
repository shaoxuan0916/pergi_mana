import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-4 md:grid grid-cols-2 ">
      <div className="flex flex-col space-y-3 w-full p-4">
        <Skeleton className="h-[250px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 md:h-6 w-full" />
          <Skeleton className="h-4 md:h-6 w-full" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 w-full p-4">
        <Skeleton className="h-[250px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 md:h-6 w-full" />
          <Skeleton className="h-4 md:h-6 w-full" />
        </div>
      </div>
    </div>
  );
}
