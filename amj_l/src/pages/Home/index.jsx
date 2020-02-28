import React from "react";
import "./index.css";
import "../../index.css";

function Home() {
  return (
    <div className="column">
      <div className="pageBody">
        <h1 className="heading">About me</h1>

        <p className="paragraph">
          Web Developer in the making, with a background in Quality Assurance
          and life-long dedication to learning. Focused and outcome-driven. I am
          committed to problem solving and show attention to detail no matter
          the complexity of the project.
          <br />
          <br />
          Currently commpleting a Bootcamp Certificate with the University of
          Birmingham - a 24-week intensive program focused on gaining technical
          programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap,
          Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js &amp;
          ReactJS. <br />
          <br />
          You can find me on{" "}
          <a
            href="https://github.com/NalinKane"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          and{" "}
          <a
            href="https://www.linkedin.com/in/anna-lebiedziewicz-35588116b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
