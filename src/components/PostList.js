import React from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { Container, Pagination, Spinner } from "react-bootstrap";
import { asyncChangePage } from "../store/actionCreators";
import SortAndSearchForm from "./SortAndSearchForm";
import { useSearchAndSort } from "../hooks/useSearchAndSort";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const { searchQuery, select } = useSelector((state) => state.sortAndSearch);
  const pageAndLimit = useSelector((state) => state.pageAndLimit);
  const countPage = Math.ceil(pageAndLimit.postCount / pageAndLimit.limit);

  const searchedAndSortedPosts = useSearchAndSort(
    posts.posts,
    searchQuery,
    select
  );

  let items = [];
  for (let i = 1; i <= countPage; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === pageAndLimit.page}
        variant="dark"
        onClick={() => dispatch(asyncChangePage({ page: i }))}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Container className="d-flex flex-column gap-5">
      <SortAndSearchForm />
      {posts.error ? <h2>{posts.error.message}</h2> : ""}
      {posts.loading ? (
        <Spinner animation="border" variant="primary" className="m-lg-auto" />
      ) : (
        ""
      )}
      {searchedAndSortedPosts?.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      <Pagination className="justify-content-center pt-3 pb-3">
        {items}
      </Pagination>
    </Container>
  );
};

export default PostList;
