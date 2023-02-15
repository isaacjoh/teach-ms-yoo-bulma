import React from "react";
import Title from "./Title";
import Picture from "./Picture";

const CGIMath = () => (
  <div className="container cgi-math">
    <Title text="CGI Math" />

    <p className="subtitle">
      I create word problems based on students’ cultural references and
      interests, differentiate instruction by providing different number sets,
      and plan inquiry-based instructions centered around the students’ needs
      and strengths. I challenge students to productively struggle and persevere
      with the growth mindset. These are some of my students' samples below:
    </p>
    <div className="columns">
      <div className="column">
        <Picture ratio={true} src="images/cgi-math-1.png" />
      </div>
      <div className="column">
        <Picture ratio={true} src="images/cgi-math-4.png" />
      </div>
    </div>
    <p className="subtitle">
      They are given a safe place to share during class discussion and critique
      the reasoning of others. Students are strongly encouraged to use
      manipulatives, virtual tools online, and explain everything to show their
      thinking visually and orally.
    </p>
    <div className="columns">
      <div className="column">
        <Picture ratio={true} src="images/cgi-math-2.png" />
      </div>
      <div className="column">
        <Picture ratio={true} src="images/cgi-math-3.png" />
      </div>
    </div>
    <p className="subtitle">
      Students are sharing their math strategies on Seesaw and giving positive
      feedback and asking probing questions to their peers after listening to
      each others' strategies. They love learning from each other!
    </p>
    <div className="columns">
      <div className="column">
        <Picture ratio={true} src="images/seesaw-1.png" />
      </div>
      <div className="column">
        <Picture ratio={true} src="images/seesaw-2.png" />
      </div>
    </div>
    <p className="subtitle">
      I believe that math should be hands-on, engaging, fun, and culturally
      relevant to the students. One of the best ways to provide this is through
      games! Students also practice their academic discourse and build
      relationships by playing math games.
    </p>
    <div className="columns">
      <div className="column">
        <Picture ratio={true} src="images/cards-1.jpg" />
      </div>
      <div className="column"></div>
    </div>
  </div>
);

export default CGIMath;
