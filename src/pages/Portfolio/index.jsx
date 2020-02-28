import React from "react";
import "./index.css";
import ImageBox from "../../components/ImageBox";
import { portfolio } from "./data";

function Portfolio() {
  return (
    <div className="column">
      <h1 className="heading">Portfolio</h1>
      <div className="galleryColumn">
        {portfolio &&
          portfolio.map(project => <ImageBox {...project} key={project.id} />)}
      </div>
    </div>
  );
}

export default Portfolio;
