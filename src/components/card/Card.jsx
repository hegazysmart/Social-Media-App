import React from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./Card.styles";

const Card = ({ post, img }) => {
  return (
    <CardContainer>
      <Link to={`/posts/${post.id}`} state={{ ...post }}>
        <img src={img} alt={post.id} />
        <h4>{post.title ? post.title : `Title ${post.id}`}</h4>
        <p>{post.body ? post.body : `body ${post.id}`}</p>
      </Link>
    </CardContainer>
  );
};

export default Card;
