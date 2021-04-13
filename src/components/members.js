import React from "react";
import Surendra from "../Surendra.JPG";
import Venkatesh from "../Venkatesh.JPG";
import Ankit from "../Ankit Raut.jpg";
import person from "../member.jpg";

const Members = (props) => {
  return (
    <div class="container">
      <div class="row">
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
              <a href="#">B Venkatesh</a>
              <p>PhD</p> <small>(CEO and founder)</small>
            </h3>
            <p>techswap.iit@gmail.com</p>
            <p>+91-8754517751</p>
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
              <a href="#">Surendra Errepalli</a>
              <p>Mtech</p>
              <small>(COO)</small>
            </h3>
            <p>techswap.iit@gmail.com</p>
            <p>+91-8248149388</p>
          </div>
        </div>

        <div class="clearfix visible-xs visible-sm"></div>

        <div class="col-md-3 col-xs-6 col-xss-12">
          <div class="member text-center">
            <div class="member-top">
              <figure>
                <img src={Ankit} alt="Member Name" width="325" height="350" />
              </figure>
            </div>
            <h3 class="member-title">
              <a href="#">Ankit Raut</a> <small>(Member)</small>
            </h3>
          </div>
        </div>

        <div class="col-md-3 col-xs-6 col-xss-12">
          <div class="member text-center">
            <div class="member-top">
              <figure>
                <img src={person} alt="Member Name" width="325" height="350" />
              </figure>
            </div>
            <h3 class="member-title">
              <a href="#">Member</a> <small>(Member)</small>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
