import React from "react";
import Title from "./Title";

const BlendedLearning = () => (
  <div className="container blended-learning">
    <Title text="My Classroom Samples" />

    <div className="tile is-ancestor">
      <div className="tile is-vertical is-parent is-4">
        <div className="tile is-child is-vertical">
          <article className="tile is-child notification is-danger">
            <p className="mini-title">Team Tasks</p>
            <p className="subtitle">
              While I worked with expert groups, students worked on different
              team tasks. One of the tasks was to learn more about different
              habitats as a group by using the links I provided on Google
              Slides.
            </p>
            <figure className="image">
              <img
                className="blended-learning-img"
                src="images/team-task-min.png"
                alt="team-task-1"
              />
            </figure>
          </article>
          <article className="tile is-child notification is-info">
            <p className="mini-title">Expert Groups</p>
            <p className="subtitle">
              I taught the expert groups using nearpod lessons that I made.
            </p>
            <figure className="image">
              <img
                className="blended-learning-img"
                src="images/nearpod.png"
                alt="nearpod"
              />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-primary">
          <p className="mini-title">Virtual Field Trip</p>
          <p className="subtitle">
            I took the students on a virtual reality field trip to the different
            habitats and participated in a discussion with their partner by
            asking questions, making comments and making predictions.
          </p>
          <a
            className="subtitle"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dreamy-hoover-cc92d8.netlify.com/"
            style={{ display: "block", marginBottom: "24px" }}
          >
            Check it out here!
          </a>
          <figure className="image">
            <img
              className="blended-learning-img"
              src="images/desert-min.png"
              alt="desert"
            />
          </figure>
        </article>
      </div>
    </div>

    <div className="tile is-ancestor">
      <div className="tile is-parent is-6">
        <article className="tile is-child notification is-warning">
          <p className="mini-title">Google Sites</p>
          <p className="subtitle">
            I provided students in my class the opportunity to have an authentic
            audience so that they can share what they have been learning
            throughout the year. It shows their growth and gives students time
            to self-reflect on their learning.
          </p>
          <figure className="image is-4by3">
            <img
              className="blended-learning-img"
              src="images/portfolio.png"
              alt="portfolio"
            />
          </figure>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-danger">
          <p className="mini-title">Science Project using Do Ink</p>
          <p className="subtitle">
            I had the students apply what they learned by making an alien planet
            using their creativity. I asked them to include characteristics,
            plants, animals, and interesting facts as a group together. At the
            end, they recorded their presentation using Do Ink. (Students
            privacy is protected)
          </p>
          <iframe
            src="https://www.youtube.com/embed/_2FMkC1fHDw"
            title="science project using do ink"
            width="100%"
            height="240"
            frameBorder="0"
            allowtransparency="true"
            allowFullScreen
          />
        </article>
      </div>
    </div>
  </div>
);

export default BlendedLearning;
