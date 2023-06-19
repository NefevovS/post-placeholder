import { useMemo } from "react";

export const useSearchAndSort = (posts, searchQuery, select) => {
  const searchedPosts = useMemo(() => {
    if (searchQuery)
      return posts.filter((post) => post.title.includes(searchQuery));
    else return posts;
  }, [posts, searchQuery]);

  const searchedAndSortedPosts = useMemo(() => {
    if(select==="default") return searchedPosts
    if (select)
      return searchedPosts.sort((a, b) => a[select].localeCompare(b[select]));
    else return searchedPosts;
  }, [searchedPosts, select]);

  return searchedAndSortedPosts;
};