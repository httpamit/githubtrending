import React from "react";
import { GoRepo } from "react-icons/go";
import { GoRepoForked } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";

import { isNull, isUndefined } from "../shared/util";

export default function Repository({ data }) {
  return (
    <li className="list-group-item">
      <Article>
        <Left>
          <Heading>
            <a href={data.url}>
              <GoRepo /> {data.username} /{" "}
              <strong>{data.repositoryName}</strong>
            </a>
          </Heading>
          <p>{data.description}</p>
          <Links>
            {!isNull(data.language) && <span>{data.language}</span>}
            <a href="/#">
              <FaRegStar /> {data.totalStars}
            </a>
            <a href="/#">
              <GoRepoForked /> {data.forks}
            </a>
            <span>
              Built by
              {!isUndefined(data.builtBy) && (
                <>
                  {data.builtBy.map((item, index) => (
                    <a className="user-image" href={item.url} key={index}>
                      <img
                        src={item.avatar}
                        alt={item.username}
                        title={item.username}
                      />
                    </a>
                  ))}
                </>
              )}
            </span>
          </Links>
        </Left>
        <Right>
          <button>
            <FaRegStar /> Star
          </button>
          <p>
            <FaRegStar /> {data.starsSince} stars today
          </p>
        </Right>
      </Article>
    </li>
  );
}

const Article = styled.article`
  display: flex;
  font-size: 14px;
  a {
  }
  svg {
    vertical-align: -1px;
  }
`;

const Left = styled.div`
  flex-basis: 85%;
`;

const Right = styled.div`
  flex-basis: 25%;
  text-align: right;
  button {
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
    color: #24292f;
    background: #f6f8fa;
    border: none;
    font-size: 12px;
    padding: 5px 12px;
    border: 1px solid #cacdd1;
    border-radius: 5px;
    &:hover {
      transition-duration: 0.1s;
      background: #f3f4f6;
    }
  }
  p {
    font-size: 12px;
    position: absolute;
    right: 20px;
    bottom: 10px;
    margin: 0;
  }
`;

const Heading = styled.h1`
  font-size: 20px;
  svg {
    color: #57606a;
    vertical-align: middle;
  }
`;

const Links = styled.div`
  font-size: 12px;
  > a,
  span {
    margin-right: 16px;
    color: #57606a;
    display: inline;
    vertical-align: middle;
  }
  .user-image {
    display: inline-block;
    margin: 0 2px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    overflow: hidden;
    vertical-align: middle;
    background-color: #f5f5ff;
    border: 1px solid #ccc;
    img {
      object-fit: cover;
      max-width: 100%;
    }
  }
`;
