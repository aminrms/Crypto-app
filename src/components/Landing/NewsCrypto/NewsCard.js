import React from "react";
import { Typography, Card, CardActions, Avatar } from "@mui/material";
import moment from "moment";
// Css
import "./NewsCryptoStyle.css";

const NewsCard = ({
  imageCard,
  CardAlt,
  category,
  content,
  datePublished,
  title,
  AvatarImage,
  AvatarAlt,
  AvatarName,
  url,
}) => {
  return (
    <Card
      className="card"
      sx={{
        background: "transparent",
      }}
    >
      <a href={url} alt={CardAlt} title={title}>
        <div className="card-header">
          <div className="overall-content">
            <div className="category">{`${category[0].toUpperCase()}${category.substring(
              1,
              category.length - 1
            )}`}</div>
            <div className="content">{content}</div>
          </div>
          <div className="card-media">
            <img src={imageCard} alt={CardAlt} />
          </div>
        </div>
        <div className="card-content">
          <div className="card-title">{title}</div>
        </div>
        <div className="card-details">
          <div className="card-avatar">
            <Avatar src={AvatarImage} alt={AvatarAlt} />
            <span>{AvatarName}</span>
          </div>
          <div className="card-dates">
            <span style={{ fontSize: "13px", color: "#666" }}>
              {moment(datePublished).startOf("month").fromNow()}
            </span>
          </div>
        </div>
      </a>
    </Card>
  );
};

export default NewsCard;
