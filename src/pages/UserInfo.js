import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsByUserIdPending,
  fetchUserByIdPending,
} from "../store/actionCreators";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import avatar from "../assets/img/avatar.jpg";
import PostItem from "../components/PostItem";

const UserInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.postsById);
  useEffect(
    function () {
      dispatch(fetchUserByIdPending(Number(id)));
      dispatch(fetchPostsByUserIdPending(Number(id)));
    },
    [id, dispatch]
  );
  const link = `https://${user.user?.website}`;

  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <Button className="mt-5 mb-5" onClick={() => navigate("/")}>
            Назад
          </Button>
        </Col>
      </Row>

      {user.error && <h2>{user.error.message}</h2>}
      {user.loading ? (
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
        <Row>
          <Col sm={5} lg="5">
            <Image src={avatar} rounded width={200} />
          </Col>
          <Col sm={3}>
            <b>Username:</b>
            <div>{user.user?.username}</div>
            <b>Name:</b>
            <div>{user.user?.name}</div>
            <b>Website:</b>
            <div>
              <a href={link} target="_blank" rel="noreferrer">
                {user.user?.website}
              </a>
            </div>
            <b>Phone:</b>
            <div>{user.user?.phone}</div>
            <b>Address:</b>
            <div>{user.user?.address.city}</div>
            <div>{user.user?.address.street}</div>
            <div>{user.user?.address.suite}</div>
            <div>{user.user?.address.zipcode}</div>
          </Col>
        </Row>
      )}
      <Container className="d-flex flex-column gap-5 mt-5 mb-5">
        {posts.error && <h2>{posts.error.message}</h2>}
        {posts.loading && (
          <Spinner animation="border" variant="primary" className="m-lg-auto" />
        )}
        {posts.posts?.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </Container>
    </Container>
  );
};

export default UserInfo;
