import { API_URL } from "@/config";

export const getGamesByRow = async (row, isMobile) => {
  isMobile = isMobile ? 1 : false;
  const response = await fetch(`${API_URL}/home/${row}?isMobile=${isMobile}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const { status, data } = await response.json();
  if (status !== "success") {
    console.log("Could not fetch data");
    return {};
  }

  return data;
};
