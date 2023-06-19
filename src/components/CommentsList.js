import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsById } from "../store/actionCreators";
import CommentsItem from "./CommentsItem";

const CommentsList = ({ postId }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const commentsArray = useSelector((state) => state.comments);
  //ищем массив с заданным postId
  const comments = commentsArray.filter(
    (el) => el.comments[0].postId == postId
  );
  //
  //забираем последний массив
  const comm = comments[comments.length - 1]?.comments;

  return (
    <div >
      <div style={{marginLeft:"75px"}}>
        {visible
          ? comm?.map((comments, index) => (
              <CommentsItem key={index} comments={comments} />
            ))
          : ""}
      </div>
      <Button
        onClick={() => {
          if (!visible) {
            dispatch(fetchCommentsById(postId));
            setVisible(true);
          } else {
            setVisible(false);
          }
        }}
      >
        {visible ? "Скрыть" : "Коментарии"}
      </Button>
    </div>
  );
};

export default CommentsList;
