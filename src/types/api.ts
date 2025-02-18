
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
  business: {
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
  };
  token: {
    type: string;
    name: string | null;
    token: string;
    abilities: string[];
    lastUsedAt: string | null;
    expiresAt: string;
  };
}
