import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <Header className="card-header">
      <Links>
        <StyledLink
          className={
            splitLocation[1] === "" || splitLocation[1] === "reposList"
              ? "active"
              : ""
          }
          to="/reposList">
          Repositories
        </StyledLink>
        <StyledLink
          className={splitLocation[1] === "devsList" ? "active" : ""}
          to="/devsList">
          Developers
        </StyledLink>
      </Links>
    </Header>
  );
}

const Links = styled.div`
  font-size: 14px;
  border: 1px solid #d0d7de;
  padding: 5px 0;
  border-radius: 6px;
  overflow: hidden;
`;

const Header = styled.header`
  background: #f6f8fa;
  display: flex;
`;

const StyledLink = styled(Link)`
  padding: 7px 16px;
  line-height: 20px;
  color: #24292f;
  font-weight: 500;
  border-right: 1px solid #d0d7de;
  &:last-child {
    border-right: none;
  }
  &:hover,
  &.active {
    color: #fff;
    background: #0969da;
  }
`;
