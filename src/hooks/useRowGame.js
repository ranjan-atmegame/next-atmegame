"use client";
import { useState, useEffect, useCallback } from "react";
import { getGamesByRow } from "@/api/home";

export default function useRowGame(row) {
  const [category, setCategory] = useState();

  const getGamesByRowName = useCallback(async () => {
    return await getGamesByRow(row);
  }, [row]);

  useEffect(() => {
    getGamesByRowName(row).then((response) => {
      setCategory(response);
    });
  }, [getGamesByRowName]);

  if (!category) {
    return [category, true];
  }

  return [category, false];
}
