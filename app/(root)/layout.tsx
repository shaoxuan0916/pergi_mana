import BottomNavigation from "@/components/layout/BottomNavigation";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <BottomNavigation />
    </div>
  );
}
