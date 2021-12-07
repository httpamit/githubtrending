import React from "react";
import styled from "styled-components";

export default function Header({ heading, title }) {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.header`
  background: #f5f8fa;
  border-bottom: 1px solid #d0d7de;
  padding: 40px 0;
  text-align: center;
  margin-bottom: 40px;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;

const Title = styled.div``;
