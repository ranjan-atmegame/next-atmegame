import { API_URL } from "@/config";

export const dashboardRecommendGame = async (token, limit = 4) => {
  const authToken = `Bearer ${token}`;
  const response = await fetch(
    `${API_URL}/users/recommend?dashboard=1&limit=${limit}`,
    {
      headers: { Authorization: authToken },
    }
  );

  return await response.json();
};
