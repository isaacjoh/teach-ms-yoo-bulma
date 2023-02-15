import React from "react";
import Title from "./Title";

const resumeDownloadPath = "hayoung-oh-resume-2023.pdf";

const onButtonClick = () => {
  fetch(resumeDownloadPath).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = resumeDownloadPath;
      alink.click();
    });
  });
};

const Resume = () => (
  <div className="container">
    <Title text="Resume" />

    <div className="resume-container">
      <div className="columns">
        <div className="column resume-page-1">
          <a href="images/hayoung-oh-resume-2023_1.jpg" data-lightbox="resume">
            <img
              src="images/hayoung-oh-resume-2023_1.jpg"
              alt="page-1-thumbnail"
            />
          </a>
        </div>
        <div className="column resume-page-2">
          <a href="images/hayoung-oh-resume-2023_2.jpg" data-lightbox="resume">
            <img
              src="images/hayoung-oh-resume-2023_2.jpg"
              alt="page-2-thumbnail"
            />
          </a>
        </div>
      </div>
      <div className="download">
        <p>
          <button className="button" onClick={onButtonClick}>
            <i className="fa fa-download"></i>Download Resume
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default Resume;
