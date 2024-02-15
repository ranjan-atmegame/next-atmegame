import { API_URL } from "@/config";

export const saveNotification = (data) => {
  fetch(`${API_URL}/notificatoin`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
