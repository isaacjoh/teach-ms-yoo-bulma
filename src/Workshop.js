import React from "react";
import Title from "./Title";
import Picture from "./Picture";

const Workshop = () => (
  <div className="container workshop">
    <Title text="Reader's Workshop - Balanced Literacy" />
    <p class="subtitle">
      I provide an atmosphere where students have choices, voices, and flexible
      seating which empowers and engages them in learning.
    </p>

    <div className="columns">
      <div className="column">
        <Picture
          src="images/choice-1.png"
          text="Students receive differentiated workshop contracts at their level and are given choices to choose what they desire to work on. They also have access to digital and audio text that make it accessible for all types of learners. Students can choose to work independently or with a partner and sit wherever they want!"
        />
      </div>
      <div className="column">
        <Picture
          src="images/choice-2.png"
          text="During this time, I pull small groups for differentiated learning. I help students with learning gaps by giving targeted instruction on their specific needs while continuing to help other students extend their learning. Choice, freedom, and voice empower, engage, and help students take ownership of their own learning."
        />
      </div>
    </div>

    <Title text="Differentiated Workshop Contracts" />

    <div className="columns">
      <div className="column is-two-fifths">
        <Picture
          ratio={true}
          src="images/readers-1.png"
          text="Students record themselves reading and upload the best one to google classroom. Recording themselves reading engages students, and boost up their self-esteem to help them become confident readers. They can listen to themselves read and learn from their mistakes. They can also listen to other students read and learn from their peers."
        />
      </div>
      <div className="column is-three-fifths">
        <Picture
          src="images/readers-2.png"
          text="Reader’s Theater - Students practice reading with fluency and expression while having fun!"
        />
      </div>
    </div>

    <Title text="Differentiated Instruction" />

    <div className="columns">
      <div className="column">
        <Picture
          src="images/differentiated-instruction-1.png"
          text="I had students who struggled with decoding words with long vowels in my second grade class. My students showed huge interest and excitement with this activity."
        />
      </div>
      <div className="column">
        <Picture
          src="images/differentiated-instruction-2.png"
          text="This game helped to increase their engagement in learning as well as improved their decoding skills."
        />
      </div>
    </div>

    <Title text="Writer's Workshop" />

    <p class="subtitle">
      I teach mini lessons along with small group instructions to provide
      differentiated support. Students work with partners and help each other
      during the writing process and are given regular and immediate feedback.
      Students are always writing to an authentic audience and I provide them
      with multiple ways to publish their writing: type or voice type on google
      doc, make a video, or use ChatterPic.
    </p>

    <div className="columns">
      <div className="column">
        <Picture
          src="images/writers-workshop.png"
          figureStyle={{ paddingTop: "115%" }}
        />
      </div>
      <div className="column"></div>
    </div>
  </div>
);

export default Workshop;
