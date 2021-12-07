import React from "react";
import styled from "styled-components";

export default function Loading() {
  return (
    <Container>
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;
