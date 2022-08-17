import React from "react";
import "./TopItems.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TopItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <div className="container-fluid topsale my-3 py-5">
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <h2 className="topitems">Top Items</h2>
              <p className="toptext m-4 p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-5">
              <Card style={{ width: "20rem", height: "25rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Tracksuit Hyped</Card.Title>
                  <Card.Text>Apple Cherry</Card.Text>
                  <Card.Text>rs.345</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopItems;
