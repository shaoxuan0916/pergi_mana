"use client";

import { publicHeaderLinks, businessHeaderLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderNavItems = ({ isBusiness }: { isBusiness?: boolean }) => {
  const pathname = usePathname();

  const links = isBusiness ? businessHeaderLinks : publicHeaderLinks;

  return (
    <ul className="hidden md:flex justify-between items-center w-full gap-8">
      {links.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex justify-center items-center text-[16px] font-medium whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderNavItems;
