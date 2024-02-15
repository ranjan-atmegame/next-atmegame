import { useState, useEffect, useCallback } from "react";
import { getCategoryGames } from "@/api/category";

export default function useCategoryGames(
  categoryId,
  mobile,
  limit,
  skip,
  filter,
  updateStateInParent,
  noMoreCatGames,
  updateLimitInParent
) {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadMoreCatGames = useCallback(async () => {
    if (skip != 0 && !noMoreCatGames) {
      setLoading(true);
      const res = await getCategoryGames(
        categoryId,
        mobile,
        limit,
        skip,
        filter
      );
      if (res && res.games && res.games.length > 0) {
        setCategory(res);
      }
      if (res && res.games && res.games.length < 30) {
        updateStateInParent(true);
        updateLimitInParent(0);
      }
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  }, [categoryId, skip]);

  useEffect(() => {
    loadMoreCatGames();
  }, [loadMoreCatGames]);

  return [category, loading];
}
