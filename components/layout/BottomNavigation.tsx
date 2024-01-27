"use client";

import {
  businessBottomNavigationLinks,
  publicBottomNavigationLinks,
} from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomNavigation = ({ isBusiness }: { isBusiness?: boolean }) => {
  const pathname = usePathname();

  const links = isBusiness
    ? businessBottomNavigationLinks
    : publicBottomNavigationLinks;

  return (
    <div className="p-4 h-[90px] fixed bottom-0 left-0 right-0 bg-white shadow-xl shadow-black/90 md:hidden">
      <div className="grid grid-cols-4 mx-auto w-full bg-white">
        {links.map((link) => {
          const isActive = pathname === link.route;
          return (
            <Link href={link.route} key={link.route}>
              <div
                className={`${
                  isActive && "text-primary-500"
                } flex flex-col items-center gap-2 text-[16px] font-medium whitespace-nowrap`}
              >
                {link.icon}
                <p className="text-[11px] font-medium">{link.label}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
