import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import avatar from "../assets/img/avatar.jpg";
import { useNavigate } from "react-router-dom";
import CommentsList from "./CommentsList";

const PostItem = ({ post }) => {
  const navigate = useNavigate();
  return (
      <Card className="p-2">
        <Row>
          <Col className="flex-grow-0">
            <img
              src={avatar}
              alt="avatar"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/userInfo/${post.userId}`)}
            />
          </Col>
          <Col>
            <p className="fw-bold">{post.title}</p>
            <p>{post.body}</p>
          </Col>
        </Row>
        <Row  className="d-flex justify-content-end">
            <Col >
                <CommentsList postId={post.id} />
            </Col>
        </Row>
      </Card>

  );
};

export default PostItem;
