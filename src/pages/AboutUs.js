import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';

import ReactLogo from '../assets/react-logo.png';
import NodeLogo from '../assets/node-logo.png';

const AboutUs = (props) => {
  const reactLink = 'https://reactjs.org/';
  const nodeLink = 'https://nodejs.org/es/';

  return (
    <Container>
      <Title>
        About Us
      </Title>
      <Description>
        During this workshop you'll learn basic notions of ReactJS and NodeJS.
        The goal is to build a small, fully functional application that helps you understand the core
        concepts of this technologies.
      </Description>

      <Row>
        <Col md={{ size: 4, offset: 2 }} xs="12">
          <CardContainer>
            <Card inverse>
              <CardImg top src={ReactLogo} alt="ReactJS" />
              <CardBody>
                <CardTitle>ReactJS</CardTitle>
                <CardText>
                  A declarative, component-based JavaScript library for building user interfaces.
                </CardText>

                <a href={reactLink} target="_blank" rel="noopener noreferrer">
                  <Button color="info">
                    More Info
                  </Button>
                </a>
              </CardBody>
            </Card>
          </CardContainer>
        </Col>

        <Col md="4" xs="12">
          <CardContainer>
            <Card inverse>
              <CardImg top src={NodeLogo} alt="NodeJS" />
              <CardBody>
                <CardTitle>NodeJS</CardTitle>
                <CardText>
                  A JavaScript open-source, cross-platform runtime built on Chrome's V8 JavaScript engine.
                </CardText>

                <a href={nodeLink} target="_blank" rel="noopener noreferrer">
                  <Button color="info">
                    More Info
                  </Button>
                </a>
              </CardBody>
            </Card>
          </CardContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;

const Title = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: rgb(23,162,184);
`;

const Description = styled.p`
  text-align: center
  font-size: 18px;
`;

const CardContainer = styled.div`
  margin-bottom: 30px;

  .card {
    align-items: center;

    &:hover {
      box-shadow: 0px 0px 30px 0px rgba(23,162,184,0.3);
      border: 1px solid rgba(23,162,184,.5);
      cursor: pointer;
    }
  }

  .card-img-top {
    width: 180px;
  }

  .card-body {
    border-top: 1px solid rgba(0,0,0,.125);
    background: slategrey;
    text-align: center;
  }
`;
