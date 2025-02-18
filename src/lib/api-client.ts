
const API_BASE_URL = "https://api.k-pin.com/api";

export const apiClient = {
  async register(data: FormData) {
    const response = await fetch(`${API_BASE_URL}/auth/businesses/register`, {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Registration failed");
    }

    return response.json();
  },
};
