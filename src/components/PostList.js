import React from "react";
import PostItem from "./PostItem";
import {useDispatch, useSelector} from "react-redux";
import { Container, Pagination } from "react-bootstrap";
import {changePage} from "../store/actionCreators";

const PostList = () => {
  const dispatch=useDispatch()
  const posts = useSelector((state) => state.posts);
  const pageAndLimit = useSelector((state) => state.pageAndLimit);
  const countPage = Math.ceil(pageAndLimit.postCount / pageAndLimit.limit);
  let items = [];
  for (let i = 1; i <= countPage; i++) {
    items.push(
      <Pagination.Item key={i} active={i === pageAndLimit.page} variant="dark" onClick={()=>dispatch(changePage(i))}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Container className="d-flex flex-column gap-2">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      <Pagination className="justify-content-center pt-3 pb-3">{items}</Pagination>
    </Container>
  );
};

export default PostList;