import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi, I’m <span className="purple">Pagalavan K S </span>
          – a passionate<span className="purple"> developer and graphic designer </span>dedicated to bringing ideas to life through creativity and code.
            <br /><br />
            As a skilled developer, I specialize in building innovative solutions using Node.js and modern JavaScript libraries and frameworks. Whether it’s crafting seamless user experiences or developing scalable back-end systems, I love solving problems and delivering impactful results.
            <br /><br />
            On the creative side, I’m fluent in design tools like Adobe Illustrator, Canva, and Photoshop. Designing eye-catching posters, banners, and visuals is my way of adding vibrance to ideas and making them stand out.
            <br /><br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Posters
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pagalavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
