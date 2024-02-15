import { useState, useEffect, useCallback } from "react";
import { getAllBlogs } from "@/api/blog";

export default function useBlog(limit, skip, updateStateInParent, noMoreCatGames) {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);

  const loadMoreBlogs = useCallback(async () => {
    if (skip != 0 && !noMoreCatGames) {
      setLoading(true);
        const res = await getAllBlogs(limit, skip);
        setLoading(false);
        if (res && res.blogs && res.blogs.length > 0) {
          setBlog(res);
        } else {
          updateStateInParent(true)
        }
    }
  }, [skip]);


  useEffect(() => {
    loadMoreBlogs();
  }, [loadMoreBlogs])

  return [blog, loading]
}
