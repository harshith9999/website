import React from "react";
import NavigationBar from "./Navbar/Navbar";
import "./Pages.css";
import { Carousel } from "react-bootstrap";
import Members from "./members";
import Footer from "./Footer";
import banner from "../banner_img.png";

function Home(props) {
  return (
    <div className="d-flex flex-column justify-content-between">
      <div>
        <NavigationBar />
        <div className="content">
          <img src={banner} />
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
        <Members />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
