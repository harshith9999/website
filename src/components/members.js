import React from "react";
import Surendra from "../Surendra.JPG";
import Venkatesh from "../Venkatesh.JPG";
import Gangadhar from "../Gangadhar.jpg";

const Members = (props) => {
  return (
    <div class="container">
      <div class="row" style={{ justifyContent: "center" }}>
        <div class="col-md-3 col-xs-6 col-xss-12">
          <div class="member text-center">
            <div class="member-top">
              <figure>
                <img
                  src={Venkatesh}
                  alt="Member Name"
                  width="325"
                  height="350"
                />
              </figure>
            </div>
            <h3 class="member-title">
              <p style={{ color: "aquamarine", fontWeight: "bold" }}>
                B Venkatesh{" "}
                <sub style={{ color: "white", fontWeight: "normal" }}>
                  Ph.D.
                </sub>
              </p>
              <p style={{ paddingTop: "1px" }}>Civil Engineering, IIT Madras</p>
              <small>(CEO and Founder)</small>
            </h3>
          </div>
        </div>

        <div class="col-md-3 col-xs-6 col-xss-12">
          <div class="member text-center">
            <div class="member-top">
              <figure>
                <img
                  src={Surendra}
                  alt="Member Name"
                  width="325"
                  height="350"
                />
              </figure>
            </div>
            <h3 class="member-title">
              <p style={{ color: "aquamarine", fontWeight: "bold" }}>
                Surendra Errepalli{" "}
                <sub style={{ color: "white", fontWeight: "normal" }}>
                  M.tech
                </sub>
              </p>
              <p style={{ paddingTop: "1px" }}>Civil Engineering, IIT Madras</p>
              <small>(COO)</small>
            </h3>
          </div>
        </div>

        <div class="clearfix visible-xs visible-sm"></div>

        <div class="col-md-3 col-xs-6 col-xss-12">
          <div class="member text-center">
            <div class="member-top">
              <figure>
                <img src={Gangadhar} alt="Member Name" width="325" height="350" />
              </figure>
            </div>
            <h3 class="member-title">
              <p style={{ color: "aquamarine", fontWeight: "bold" }}>
              Gangadhar
                <sub style={{ color: "white", fontWeight: "normal" }}>
                  Ph.D.
                </sub>
              </p>
              <p style={{ paddingTop: "1px" }}>
                Chemical Engineering, IIT Madras
              </p>
              <small>(Project Manager)</small>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
