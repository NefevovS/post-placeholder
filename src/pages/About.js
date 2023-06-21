import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import myPhoto from "../assets/img/myPhoto.jpeg";
import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate=useNavigate();
  return (
    <Container>
        <Button className="mt-5 mb-5" onClick={() => navigate("/")}>
            Назад
        </Button>
      <Row>
        <Col>
          <Card
            style={{
              width: "200px",
              margin: "10px auto",
              borderRadius: "15px",
            }}
          >
            <Card.Img variant="top" src={myPhoto} />
            <Card.Body>
              <Card.Title>Нефёдов Сергей</Card.Title>
              <Card.Text>
                <a href="mailto: nefedov38@gmail.com">nefedov38@gmail.com</a>
                <a href="tel:+79500378815"> +79500378815 </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <a href="https://github.com/NefevovS/" target="_blank" rel="noreferrer">
            GitHubRepo
          </a>
            <div>
                <b>Образование:</b>
                <p>
                    2017 Гуап Среднего профессионального образования, Компьютерные
                    системы и комплексы
                </p>
            </div>

            <div>
                <b>
                    О себе:
                </b>
                <p>
                        В 2017 получил диплом по ИТ специальности, но устроился работать менеджером.
                    На текущем месте не вижу перспектив роста, поэтому решил стряхнуть пыль с диплома и попробовать себя в ИТ.
                    Последний год изучаю web разработку.
                    Модные IT курсы не проходил, т.к. не вижу в этом смысла. Вся информация доступна.
                </p>
            </div>

        </Col>
      </Row>
    </Container>
  );
};

export default About;
