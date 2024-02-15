import { useState, useEffect, useCallback } from "react";
import { fetchMoreGameByCategoryId } from "@/api/game";

export default function useMoreGames(categoryId, skip, updateStateInParent, noMoreCatGames) {
    const [moreGames, setMoreGames] = useState();
    const [loading, setLoading] = useState(false);

    const loadMoreGames = useCallback(async () => {
        if (skip != 0 && !noMoreCatGames) {
            setLoading(true);
            const res = await fetchMoreGameByCategoryId(categoryId, skip);
            setLoading(false);
            if (res && res.games && res.games.length > 0) {
                setMoreGames(res.games);
            }
            if (res && res.games && res.games.length < 12) {
                updateStateInParent(true)
            }
        }
    }, [skip]);


    useEffect(() => {
        loadMoreGames();
    }, [loadMoreGames])

    return [moreGames, loading]
}
