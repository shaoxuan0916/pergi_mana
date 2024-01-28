import BottomNavigation from "@/components/layout/BottomNavigation";
import Header from "@/components/layout/Header";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="flex-1">{children}</main>
      </Suspense>
      <BottomNavigation />
    </div>
  );
}
