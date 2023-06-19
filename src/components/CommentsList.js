import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsById } from "../store/actionCreators";
import CommentsItem from "./CommentsItem";
import { logDOM } from "@testing-library/react";

const CommentsList = ({ postId }) => {
  const dispatch = useDispatch();
  const commentsArray = useSelector((state) => state.comments);
  //ищем массив с заданным postId
  const comments = commentsArray.filter(
    (el) => el.comments[0].postId == postId
  );
  //
  //забираем последний массив
  const comm = comments[comments.length - 1]?.comments;

  console.log(comm);
  return (
    <div>
      <Button onClick={() => dispatch(fetchCommentsById(postId))}>
        Показать коментарии
      </Button>
      {comm?.map((comments, index) => (
        <CommentsItem key={index} comments={comments} />
      ))}
    </div>
  );
};

export default CommentsList;
