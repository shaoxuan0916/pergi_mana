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

//  Country & States
export const country = [
  {
    countryName: "Malaysia",
    countryShortCode: "MY",
    regions: [
      {
        name: "Johor",
        shortCode: "01",
      },
      {
        name: "Kedah",
        shortCode: "02",
      },
      {
        name: "Kelantan",
        shortCode: "03",
      },
      {
        name: "Melaka",
        shortCode: "04",
      },
      {
        name: "Negeri Sembilan",
        shortCode: "05",
      },
      {
        name: "Pahang",
        shortCode: "06",
      },
      {
        name: "Perak",
        shortCode: "08",
      },
      {
        name: "Perlis",
        shortCode: "09",
      },
      {
        name: "Pulau Pinang",
        shortCode: "07",
      },
      {
        name: "Sabah",
        shortCode: "12",
      },
      {
        name: "Sarawak",
        shortCode: "13",
      },
      {
        name: "Selangor",
        shortCode: "10",
      },
      {
        name: "Terengganu",
        shortCode: "11",
      },
      {
        name: "Kuala Lumpur",
        shortCode: "14",
      },
      {
        name: "Labuan",
        shortCode: "15",
      },
      {
        name: "Putrajaya",
        shortCode: "16",
      },
    ],
  },
  {
    countryName: "Singapore",
    countryShortCode: "SG",
    regions: [
      {
        name: "Central Singapore",
        shortCode: "01",
      },
      {
        name: "North East",
        shortCode: "02",
      },
      {
        name: "North West",
        shortCode: "03",
      },
      {
        name: "South East",
        shortCode: "04",
      },
      {
        name: "South West",
        shortCode: "05",
      },
    ],
  },
];
