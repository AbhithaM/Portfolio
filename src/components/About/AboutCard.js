import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi, I’m <span className="purple">Abhitha M </span>
          from <span className="purple"> Namakkal.</span>
          <br />I am a passionate UI/UX Designer aiming to apply my creativity, technical skills, and design knowledge to produce visually appealing and meaningful work.
            <br /><br />
            I am currently pursuing my Bachelor of Engineering in CSE at Kongu Engineering College.
            <br /><br />
            I specialize in tools like Adobe Illustrator, Canva, and Figma. Designing eye-catching posters, banners, and visuals is my way of adding vibrance to ideas.
            <br /><br />
            Apart from designing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhitha M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
