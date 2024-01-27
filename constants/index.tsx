"use client";

import { Calendar, Heart, Home, ShoppingBag, UserRound } from "lucide-react";

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
    icon: <Home width={28} height={28} />,
  },
  {
    label: "Favourite",
    route: "/favourite",
    icon: <Heart width={28} height={28} />,
  },
  {
    label: "My Orders",
    route: "/my-orders",
    icon: <ShoppingBag width={28} height={28} />,
  },
  {
    label: "My Profile",
    route: "/profile",
    icon: <UserRound width={28} height={28} />,
  },
];

export const businessBottomNavigationLinks = [
  {
    label: "Home",
    route: "/",
    icon: <Home width={28} height={28} />,
  },
  {
    label: "My Business",
    route: "/business/dashboard",
    icon: <Calendar width={28} height={28} />,
  },
  {
    label: "My Profile",
    route: "/business/profile",
    icon: <UserRound width={28} height={28} />,
  },
];