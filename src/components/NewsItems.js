import React from "react";

const NewsItems = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div className="card my-3">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: 1 }}
          >
            {source}
          </span>
        </div>
      <img
        src={
          !imageUrl
            ? "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=2048x2048&w=is&k=20&c=SiCdpoQwFnlm2PxkFkfhKzVOs6-9thLv0ucoREy_OWE="
            : imageUrl
        }
        className="card-img-top"
        alt="News"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </small>
        </p>
        <a href={newsUrl} className="btn btn-dark">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
