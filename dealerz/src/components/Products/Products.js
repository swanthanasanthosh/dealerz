import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import "./Products.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      const API_URL = "https://fakestoreapi.com/products";
      let response = await fetch(API_URL);
      if (componentMounted) {
        let datas2 = await response.clone().json();
        let datas = await response.json();
        setData(datas2);
        setFilter(datas);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    }
    fetchData();
  }, []);

  const Loading = () => {
    return (
      <>
        <h2>Loading.......</h2>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);

    setFilter(updatedList);
  };

  const ShowProducts = () => {
    const slicedArray = data.slice(0, 6);
    return (
      <>
        <div className="buttons">
          <Nav className="justify-content-center nav-fill">
            <Nav.Item>
              <Nav.Link
                className="linkitem"
                onClick={() => {
                  setFilter(slicedArray);
                }}
              >
                All Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="linkitem"
                eventKey="link-1"
                onClick={() => {
                  filterProduct("men's clothing");
                }}
              >
                Men's Clothing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="linkitem"
                eventKey="link-2"
                onClick={() => {
                  filterProduct("women's clothing");
                }}
              >
                Women's Clothing
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="linkitem"
                eventKey="link-3"
                onClick={() => {
                  filterProduct("jewelery");
                }}
              >
                Jewellery
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="linkitem"
                eventKey="link-3"
                onClick={() => {
                  filterProduct("electronics");
                }}
              >
                Electronics
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-4 mb-5">
                <Card className="h-100 m-5" key={product.id}>
                  <Card.Img
                    className="p-4"
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    height="400px"
                  />
                  <Card.Body>
                    <Card.Text className="categoryname mt-3">
                      {product.category}
                    </Card.Text>
                    <Card.Title className="mt-4">{product.title}</Card.Title>
                    <Button className="morebutton mt-4 shadow-none rounded-circle">
                      <AiOutlineArrowRight />
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
        <div className="text-center mt-5 pt-5 mb-5 pb-5">
          <Button className="findbutton shadow-lg">Find out More</Button>
        </div>
      </>
    );
  };

  const TopItems = () => {
    const topDeals = data.filter((product) => product.rating.rate > 4);
    console.log(topDeals);

    return (
      <>
        <Slider {...settings}>
          {topDeals.map((product) => {
            return (
              <>
                <div className="row">
                  <div className="col-md-2 mb-5 ml-4">
                    <Card
                      style={{ width: "20rem", height: "23rem" }}
                      key={product.id}
                      className="text-center align-items-center"
                    >
                      <Card.Img
                        className="mt-4"
                        variant="top"
                        src={product.image}
                        alt={product.title}
                        style={{ width: "50%", height: "50%" }}
                      />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.category}</Card.Text>
                        <Card.Text className="price">
                          {product.price} AED
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </>
    );
  };

  return (
    <div>
      <div className="container-fluid catrgories my-3 py-5">
        <div className="row">
          <div className="col-12 mb-5 text-center">
            <h2 className="premium">Our Premium Collection</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>

      <div>
        <div className="container-fluid topsale mt-3 pt-5">
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
          {<TopItems />}
        </div>
      </div>

      <div className="about my-5 py-4">
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6" className="d-flex">
                <img src="Assets/story.png" alt="image holder"></img>
              </Col>

              <Col lg="6" md="6">
                <div className="main">
                  <h3 className=" hero-title m-4">Story About Our Brand</h3>
                  <p className="m-4 =hero-content" style={{ color: "#9A9AB0" }}>
                    Develop a website by finding a product identity that has
                    value and branding to become a characteristic of a company.
                    We will also facilitate the business marketing of these
                    products with our SEO experts so that they become a
                    ready-to-use website and help sell a product from the
                    company Develop a website by finding a product identity that
                    has value and branding to become a characteristic of a
                    company. We will also facilitate the business marketing of
                    these products with our SEO experts so that they become a
                    ready-to-use website and help sell a product from the
                    company.
                  </p>
                  <a className="m-4 aboutlink" href="/about">
                    Read full story
                  </a>
                </div>
                <div></div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="container-fluid my-3 py-5">
          <div className="row">
            <div className="col-12 my-5 py-5 text-center">
              <h2 className="premium">Our Achievements</h2>
            </div>
          </div>

          <div className="row justify-content-center mx-5">
            <div className="col-12 mb-5 text-center d-flex justify-content-between ">
              <img src="Assets/logo1.png.png" alt="logo1"></img>
              <img src="Assets/logo2.png.png" alt="logo1"></img>
              <img src="Assets/logo3.png.png" alt="logo1"></img>
              <img src="Assets/logo4.png.png" alt="logo1"></img>
              <img src="Assets/logo5.png.png" alt="logo1"></img>
              <img src="Assets/logo1.png.png" alt="logo1"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
