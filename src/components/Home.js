import React from "react";
import NavigationBar from "./Navbar/Navbar";
import "./Pages.css";
import SimpleImageSlider from "react-simple-image-slider";
import { Carousel } from "react-bootstrap";

function Home(props) {
  return (
    <>
      <NavigationBar />
      <div className="content">
        <img src="https://www.coreldraw.com/static/cdgs/images/free-trials/img-ui-cdgsx.jpg" />
        <div className="body1">
          Conducting Seminars, Workshops & Project Programmes crafted by
          professionals having elaborate knowledge on the subjects for the
          following disciplines of engineering
          <br />
          <ol className="list">
            <li>Civil Engineering</li>
            <li> Mechanical Engineering</li>
            <li> Computers Science & Engineering</li>
            <li>Electrical & Electronics Engineering</li>
          </ol>
        </div>
      </div>
      <h4 className="member">Members</h4>
      <div className=" d-flex justify-content-center">
        <div className="w-50">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.coreldraw.com/static/cdgs/images/free-trials/img-ui-cdgsx.jpg"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.coreldraw.com/static/cdgs/images/free-trials/img-ui-cdgsx.jpg"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.coreldraw.com/static/cdgs/images/free-trials/img-ui-cdgsx.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="contact">
        <h4>Contact Us</h4>
        <p>TechSWAP</p>
        <p>
          Nirmaan, Opp. Bhadra Hostel
          <br />
          IIT Madras.
        </p>
        <p>Phone:08754517751</p>
        <p>Email: venkateshiitm15@gmail.com</p>
      </div>
    </>
  );
}

export default Home;
