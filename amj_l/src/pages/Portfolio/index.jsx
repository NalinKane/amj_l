import React from "react";
import "./index.css";

function Portfolio() {
  return (
    <div>
      <main className="content">
        <section className="section">
          <div className="column">
            <h1 className="heading">Portfolio</h1>

            <div className="galleryColumn">
              <div className="imageBox">
                <a
                  href="https://nalinkane.github.io/password-generator/"
                  target="_blank"
                >
                  <img
                    src="../../../gallery-thumb-password.jpg"
                    className="project-image"
                    alt="Password Generator screenshot"
                  />
                  <div className="hidden-info">
                    <img src="../../../extenral-icon.png" />
                  </div>
                </a>

                <div className="overlay">
                  <a
                    href="https://github.com/NalinKane/password-generator"
                    target="_blank"
                    className="gh"
                  >
                    Password Generator
                  </a>
                </div>
              </div>
              <div className="imageBox">
                <a
                  href="https://nalinkane.github.io/Project-1/"
                  // eslint-disable-next-line
                  target="_blank"
                >
                  <img
                    src="../../../gallery-thumb-restaurant.jpg"
                    className="project-image"
                    alt="Restaurant App screenshot"
                  />
                  <div className="hidden-info">
                    <img src="../../../extenral-icon.png" />
                  </div>
                </a>
                <div className="overlay">
                  <a
                    href="https://github.com/NalinKane/Project-1"
                    target="_blank"
                    className="gh"
                  >
                    Restaurant App
                  </a>
                </div>
              </div>
              <div className="imageBox">
                <a
                  href="https://github.com/NalinKane/pdf-generator"
                  target="_blank"
                >
                  <img
                    src="../../../gallery-thumb-kicius.jpg"
                    className="project-image"
                    alt="PDF Generator screenshot"
                  />
                  <div className="hidden-info">
                    <img src="../../../extenral-icon.png" />
                  </div>
                </a>
                <div className="overlay">
                  <a
                    href="https://github.com/NalinKane/pdf-generator"
                    target="_blank"
                    className="gh"
                  >
                    PDF Profile Generator
                  </a>
                </div>
              </div>
              <div className="imageBox">
                <a
                  href="https://github.com/NalinKane/mysqltracker"
                  target="_blank"
                >
                  <img
                    src="../../../gallery-thumb-employee-tracker.jpg"
                    className="project-image"
                  />
                  <div className="hidden-info">
                    <img src="../../../extenral-icon.png" />
                  </div>
                </a>
                <div className="overlay">
                  <a
                    href="https://github.com/NalinKane/mysqltracker"
                    target="_blank"
                    className="gh"
                  >
                    Employee Tracker
                  </a>
                </div>
              </div>
              <div className="imageBox">
                <a href="https://github.com/NalinKane/meetapp" target="_blank">
                  <img
                    src="../../../gallery-thumb-meetapp.jpg"
                    className="project-image"
                  />
                  <div className="hidden-info">
                    <img src="../../../extenral-icon.png" />
                  </div>
                </a>
                <div className="overlay">
                  <a
                    href="https://github.com/NalinKane/meetapp"
                    target="_blank"
                    className="gh"
                  >
                    Meetings App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
