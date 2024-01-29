import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import HeaderNavItems from "./HeaderNavItems";

const Header = ({ isBusiness }: { isBusiness?: boolean }) => {
  return (
    <header className="w-full">
      <div className="w-full flex items-center justify-between pr-4 md:px-8 max-w-[1440px] mx-auto">
        <Link href={isBusiness ? "/business" : "/"}>
          <Image
            src="/assets/images/pergi-mana-logo.png"
            width={96}
            height={96}
            alt="PergiMana logo"
            className="w-24 h-24"
          />
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
