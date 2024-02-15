// "use client";
import { API_URL } from "@/config";
import { MORE_CATEGORY } from "@/utils/Constants";
import Categories from "./Categories";

export default async function MainCategory() {
  const getMainCategory = async () => {
    const res = await fetch(
      `${API_URL}/category?isMainMenu=true&order=order:asc&limit=10`,
      {
        next: { revalidate: 7 * 24 * 60 * 60 },
      }
    );

    const response = await res.json();
    if (response.status !== "success") {
      return [];
    }

    return response.result;
  };

  let mainCategory = await getMainCategory();
  mainCategory = [...mainCategory, MORE_CATEGORY];

  return <Categories mainCategory={mainCategory} />;
}
