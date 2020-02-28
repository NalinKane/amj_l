import React from "react";
import "./index.css";

function ImageBox({ title, url, image, ghUrl }) {
  return (
    <div className="imageBox">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={`/${image}`}
          className="project-image"
          alt={`${title} screenshot`}
        />
        <div className="hidden-info">
          <img src="/extenral-icon.png" alt={`Open ${title} in new window`} />
        </div>
      </a>
      <div className="overlay">
        <a
          href={ghUrl}
          target="_blank"
          className="gh"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
    </div>
  );
}

export default ImageBox;
