
export interface BusinessRegistrationRequest {
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
  name: string;
  address: string;
  businessTypeId: string;
}

export interface BusinessRegistrationResponse {
  business: Business;
  token: AuthToken;
}

export interface Business {
  businessTypeId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  isActive: boolean;
  isVerified: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
  logo?: string;
  socialMedia?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
  operatingHours?: BusinessHours[];
}

export interface AuthToken {
  type: string;
  name: string | null;
  token: string;
  abilities: string[];
  lastUsedAt: string | null;
  expiresAt: string;
}

export interface BusinessHours {
  day: string;
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
}

export interface BusinessPhoto {
  id: string;
  businessId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}
