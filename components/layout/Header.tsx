import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import HeaderNavItems from "./HeaderNavItems";

const Header = ({ isBusiness }: { isBusiness?: boolean }) => {
  return (
    <header className="w-full">
      <div className="w-full flex items-center justify-between p-4 md:p-8 max-w-[1440px] mx-auto">
        <Link href="/" className="w-36">
          <Image src="/next.svg" width={128} height={38} alt="ApaKhabar logo" />
        </Link>

        <nav className="md:flex hidden w-full max-w-xs">
          <HeaderNavItems isBusiness={isBusiness} />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
