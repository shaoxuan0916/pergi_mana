// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  uid: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  imageUrl: string;
  createdAt: number;
  updatedAt: number;
  onboarded?: boolean;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== Business PARAMS
export type CreateBusinessParams = {
  clerkId: string;
  uid: string;
  businessName: string;
  email: string;
  address: string;
  state: State;
  category: BusinessCategory;
  contactNumber: string;
  imageUrl: string;
  createdAt: number;
  updatedAt: number;
  onboarded?: boolean;
};

export type UpdateBusinessParams = {
  businessName: string;
  email: string;
  address: string;
  contactNumber: string;
};

// ===== Category
export enum BusinessCategory {
  FOOD_AND_BEVERAGE = "FOOD_AND_BEVERAGE",
  BEAUTY_INDUSTRY = "BEAUTY_INDUSTRY",
  WORKSHOP = "WORKSHOP",
  TRAINING_CENTRE = "TRAINING_CENTRE",
}

export enum State {
  JOHOR = "JOHOR",
  KEDAH = "KEDAH",
  KELANTAN = "KELANTAN",
  MALAKA = "MALAKA",
  NEGERI_SEMBILAN = "NEGERI_SEMBILAN",
  PAHANG = "PAHANG",
  PERAK = "PERAK",
  PERLIS = "PERLIS",
  PULAU_PINANG = "PULAU_PINANG",
  SABAH = "SABAH",
  SARAWAK = "SARAWAK",
  SELANGOR = "SELANGOR",
  TERENGGANU = "TERENGGANU",
  KUALA_LUMPUR = "KUALA_LUMPUR",
  LABUAN = "LABUAN",
  PUTRAJAYA = "PUTRAJAYA",
}
