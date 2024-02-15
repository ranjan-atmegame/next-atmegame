import { useState, useEffect, useCallback } from "react";
import { getAllCategory } from "@/api/category";

export default function useSitemap() {
  const [category, setCategory] = useState();

  const categoryGames = useCallback(async () => {
    return await getAllCategory();
  }, []);

  useEffect(() => {
    categoryGames().then((response) => {
      setCategory(response);
    });
  }, [categoryGames]);

  if (!category) {
    return [category, true];
  }

  return [category, false];
}
