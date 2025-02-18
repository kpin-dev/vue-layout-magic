
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

  async updateProfile(businessId: string, data: FormData) {
    const response = await fetch(`${API_BASE_URL}/businesses/${businessId}/profile`, {
      method: "PUT",
      body: data,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Profile update failed");
    }

    return response.json();
  },

  async updateContactInfo(businessId: string, data: FormData) {
    const response = await fetch(`${API_BASE_URL}/businesses/${businessId}/contact`, {
      method: "PUT",
      body: data,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Contact info update failed");
    }

    return response.json();
  },

  async updateOperatingHours(businessId: string, data: FormData) {
    const response = await fetch(`${API_BASE_URL}/businesses/${businessId}/hours`, {
      method: "PUT",
      body: data,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Operating hours update failed");
    }

    return response.json();
  },

  async uploadPhotos(businessId: string, files: File[]) {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("photos[]", file);
    });

    const response = await fetch(`${API_BASE_URL}/businesses/${businessId}/photos`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Photo upload failed");
    }

    return response.json();
  },

  async deletePhoto(businessId: string, photoId: string) {
    const response = await fetch(
      `${API_BASE_URL}/businesses/${businessId}/photos/${photoId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Photo deletion failed");
    }

    return response.json();
  },

  async getBusinessProfile(businessId: string) {
    const response = await fetch(`${API_BASE_URL}/businesses/${businessId}`, {
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch business profile");
    }

    return response.json();
  },

  async getBusinessPhotos(businessId: string) {
    const response = await fetch(`${API_BASE_URL}/businesses/${businessId}/photos`, {
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch business photos");
    }

    return response.json();
  },
};
