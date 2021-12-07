import React from "react";
import styled from "styled-components";
import { GoRepo } from "react-icons/go";
import { AiOutlineFire, AiOutlineHeart } from "react-icons/ai";
import { isEmptyObject } from "../shared/util";
import { isNull, isUndefined } from "../shared/util";

export default function Developer({ data }) {
  return (
    <li className="list-group-item">
      {!isEmptyObject(data) && (
        <Article className="d-flex">
          <Number href="#pa-jonatanklosko">{data.rank}</Number>
          <UserImage>
            <img
              src={data.avatar}
              width="48"
              height="48"
              alt={data.name}
              title={data.name}
            />
          </UserImage>
          <div className="col-sm-8 d-md-flex">
            <div className="col-md-6">
              <Heading>
                <a href="/#">{data.name}</a>
                <p>{data.username}</p>
              </Heading>
            </div>
            <div className="col-md-6 description">
              <p>
                <AiOutlineFire />
                Popular repo
              </p>
              {!isUndefined(data.popularRepository) && (
                <a href={data.popularRepository.url}>
                  <GoRepo />
                  {data.popularRepository.repositoryName}
                </a>
              )}
              <div>
                Simple confirmation dialogs built on top of @mui/material and
                straightforward to use thanks to React Hooks
              </div>
            </div>
          </div>
          <Right>
            <Button>
              <AiOutlineHeart />
              Sponsor
            </Button>
            <Button>Follow</Button>
          </Right>
        </Article>
      )}
    </li>
  );
}

const Article = styled.article`
  font-size: 12px;
  p {
    margin-bottom: 5px;
  }

  .description {
    p {
      text-transform: uppercase;
      svg {
        color: #bc4c00;
        font-size: 18px;
        margin: 0 4px 0 0;
      }
    }
    a {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 5px;
      display: inline-block;
      svg {
        color: #57606a;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
`;

const Number = styled.a`
  display: inline-block;
  padding-right: 10px;
`;

const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 16px;
  border: 1px solid #f6f6f6;
  img {
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Heading = styled.h1`
  font-size: 20px;
  svg {
    color: #57606a;
    vertical-align: middle;
  }
  p {
    font-size: 16px;
    color: #57606a;
  }
`;

const Right = styled.div`
  text-align: right;
  width: 100%;
`;

const Button = styled.button`
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  color: #24292f;
  background: #f6f8fa;
  border: none;
  font-size: 12px;
  padding: 5px 12px;
  border: 1px solid #cacdd1;
  border-radius: 5px;
  margin-left: 8px;
  svg {
    margin-right: 5px;
    color: #bc4c00;
    font-size: 16px;
  }
  &:hover {
    transition-duration: 0.1s;
    background: #f3f4f6;
  }
`;
