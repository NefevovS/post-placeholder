import React, {useMemo} from "react";
import PostItem from "./PostItem";
import {useDispatch, useSelector} from "react-redux";
import { Container, Pagination } from "react-bootstrap";
import {asyncChangePage} from "../store/actionCreators";
import SortAndSearchForm from "./SortAndSearchForm";
import {useSearchAndSort} from "../hooks/useSearchAndSort";

const PostList = () => {
  const dispatch=useDispatch()
  const posts = useSelector((state) => state.posts.posts);
  const {searchQuery,select}=useSelector(state => state.sortAndSearch)
  const pageAndLimit = useSelector((state) => state.pageAndLimit);
  const countPage = Math.ceil(pageAndLimit.postCount / pageAndLimit.limit);

 const searchedAndSortedPosts = useSearchAndSort(posts, searchQuery, select)



  let items = [];
  for (let i = 1; i <= countPage; i++) {
    items.push(
      <Pagination.Item key={i} active={i === pageAndLimit.page} variant="dark" onClick={()=>dispatch(asyncChangePage({page:i}))}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Container className="d-flex flex-column gap-2">
      <SortAndSearchForm/>
      {searchedAndSortedPosts?.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      <Pagination className="justify-content-center pt-3 pb-3">{items}</Pagination>
    </Container>
  );
};

export default PostList;