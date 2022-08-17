import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Hero.css";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
                {/* <div className="img1">
                <img   src="Assets/Ellipse 153.png" alt="ellipse1"></img>
                </div>

                <div className="img1">
                <img   src="Assets/Ellipse 156.png" alt="ellipse1"></img>
                </div>

                <div className="img1">
                <img   src="Assets/Ellipse 154.png" alt="ellipse1"></img>
                </div>

                <div className="img1">
                <img   src="Assets/Ellipse 157.png" alt="ellipse1"></img>
                </div> */}
              
            </Col>

            <Col lg="6" md="6">
            <div className="main">
                <h1 className=" hero-title m-4">Your Premium Sound, Unplugged!</h1>

                <p className="m-4 =hero-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> 

                <Button  href="/about"className="m-4 findbutton shadow-none" >Find out More</Button>
              </div>

              <div>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <img  className="img1" src="Assets/Ellipse 153.png" alt="ellipse1"></img> */}
    </div>
  );
};

export default Hero;
