import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CommentsItem from "./CommentsItem";
import { asyncFetchCommentsByPostId } from "../store/actionCreators";

const CommentsList = ({ postId }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const commentsStateArray = useSelector((state) => state.comments);
  const commentsObj = commentsStateArray.find((el) => el.postId === postId);


  return (
    <div>
      {commentsObj?.loading ? (
        <Spinner
          animation="border"
          variant="primary"
          style={{
            marginLeft: "250px",
            marginBottom: "50px",
            marginTop: "50px",
          }}
        />
      ) : (
        ""
      )}
      <div style={{ marginLeft: "75px" }}>
        {visible
          ? commentsObj.comments?.map((comments, index) => (
              <CommentsItem key={index} comments={comments} />
            ))
          : ""}
      </div>
      <Button
        onClick={() => {
          if (!visible) {
            dispatch(asyncFetchCommentsByPostId(postId));
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
