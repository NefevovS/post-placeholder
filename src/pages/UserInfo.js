import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByIdPending } from "../store/actionCreators";
import { Container, Image, Spinner } from "react-bootstrap";
import avatar from "../assets/img/avatar.jpg";

const UserInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  useEffect(function () {
    dispatch(fetchUserByIdPending(Number(id)));
  }, [id]);
  const link = `https://${user.user?.website}`;

  return (
    <Container>
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
        <div className="d-flex gap-5">
          <div>
            <Image src={avatar} rounded width={200} />
          </div>
          <div>
            <b>Username:</b>
            <div>{user.user?.username}</div>
            <b>Name:</b>
            <div>{user.user?.name}</div>
            <b>Website:</b>
            <div>
              <a href={link} target="_blank"  rel="noreferrer">
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
          </div>
        </div>
      )}
    </Container>
  );
};

export default UserInfo;
