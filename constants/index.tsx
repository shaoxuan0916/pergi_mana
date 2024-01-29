"use client";

import {
  Calendar,
  Heart,
  Home,
  ShoppingBag,
  TicketIcon,
  UserRound,
} from "lucide-react";

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
    route: "/business",
  },
  {
    label: "Dashboard",
    route: "/business/dashboard",
  },
  {
    label: "Offers",
    route: "/business/offers",
  },
  {
    label: "Business Profile",
    route: "/business/profile",
  },
];

// Bottom navigation links : for mobile
export const publicBottomNavigationLinks = [
  {
    label: "Home",
    route: "/",
    icon: <Home width={24} height={24} />,
  },
  {
    label: "Favourite",
    route: "/favourite",
    icon: <Heart width={24} height={24} />,
  },
  {
    label: "My Orders",
    route: "/my-orders",
    icon: <ShoppingBag width={24} height={24} />,
  },
  {
    label: "Profile",
    route: "/profile",
    icon: <UserRound width={24} height={24} />,
  },
];

export const businessBottomNavigationLinks = [
  {
    label: "Home",
    route: "/business",
    icon: <Home width={24} height={24} />,
  },
  {
    label: "Dashboard",
    route: "/business/dashboard",
    icon: <Calendar width={24} height={24} />,
  },
  {
    label: "Offers",
    route: "/business/offers",
    icon: <TicketIcon width={24} height={24} />,
  },
  {
    label: "Profile",
    route: "/business/profile",
    icon: <UserRound width={24} height={24} />,
  },
];
