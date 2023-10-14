import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import scamazon from "../../Assets/Projects/scamazon.png";
import battleship from "../../Assets/Projects/battleship.png";
import suicide from "../../Assets/Projects/suicide.png";
import authenticpowersports from "../../Assets/Projects/authenticpowersports.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battleship}
              isBlog={false}
              title="Battleship"
              description="Demonstrating my skills with basic html, css, and javascript I am in the progress of creating a web based clone of the hasbro game battleship. Currently implemented are ship placement, hit detection, turn alternation and a cpu opponent. Am planning to implement different sized ship as well as ship orientation."
              ghLink="https://github.com/poyalex/unit-1-project"
              demoLink="https://poyalex.github.io/unit-1-project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authenticpowersports}
              isBlog={false}
              title="Authenic Powersports"
              description="This project demonstrates my understanding of the react framework. I was able to transform a basic item checkout site into a mock website selling protected jpegs (i.e. user is unable to save the images on sale until payment is made)"
              ghLink="https://github.com/poyalex/unit-3-project"
              demoLink="authenticpowersports.alexanderjpoy.me"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scamazon}
              isBlog={false}
              title="Scamazon"
              description="Demonstrating my ability to work within a team, this project is a fully deployed react website modeled off of the amazon e-commerce site. Aiming to mirror real-life working conditions, my team assigned scrum points to our user stories, comitted and merged our own idvidual branches, and most importantly worked together to complete the application featured."
              ghLink="https://github.com/GundogCodes/project4AmazonVite"
              demoLink="https://scamazon.jmsmith.me/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
