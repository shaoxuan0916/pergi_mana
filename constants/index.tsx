"use client";

import {
  CalendarIcon,
  HeartIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// ========== Routes

// Header links : for desktop
export const publicHeaderLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Favourite",
    route: "/favourite",
  },
  {
    label: "My Orders",
    route: "/my-orders",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const businessHeaderLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "My Business",
    route: "/business/dashboard",
  },
  {
    label: "My Profile",
    route: "/business/profile",
  },
];

// Bottom navigation links : for mobile
export const publicBottomNavigationLinks = [
  {
    label: "Home",
    route: "/",
    icon: <HomeIcon width={28} height={28} />,
  },
  {
    label: "Favourite",
    route: "/favourite",
    icon: <HeartIcon width={28} height={28} />,
  },
  {
    label: "My Orders",
    route: "/my-orders",
    icon: <ShoppingBagIcon width={28} height={28} />,
  },
  {
    label: "My Profile",
    route: "/profile",
    icon: <UserIcon width={28} height={28} />,
  },
];

export const businessBottomNavigationLinks = [
  {
    label: "Home",
    route: "/",
    icon: <HomeIcon width={28} height={28} />,
  },
  {
    label: "My Business",
    route: "/business/dashboard",
    icon: <CalendarIcon width={28} height={28} />,
  },
  {
    label: "My Profile",
    route: "/business/profile",
    icon: <UserIcon width={28} height={28} />,
  },
];
