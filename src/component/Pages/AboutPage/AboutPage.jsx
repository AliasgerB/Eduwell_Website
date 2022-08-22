import React from "react";
import { Alists } from "./Alists";
import { AboutLists } from "./AboutLists";
import Testimonials from "../../Testimonials/Testimonials";
import { Banner } from "../../Banner/Banner";
import { OurOffice } from "../../Our_Office/OurOffice";

export const AboutPage = () => {
  return (
    <>
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h4>More About Us</h4>
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="get-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src="assets/images/about-left-image.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h6>Get info</h6>
                <h4>
                  Read More <em>About Us</em>
                </h4>
                <p>
                  You are allowed 100% to download and use our templates from
                  TemplateMo for your commercial or business websites. You are{" "}
                  <strong>not allowed</strong> to redistribute this template ZIP
                  file on any other website without a permission from us.
                  <br />
                  <br />
                  There are some unethical people on this planet earth who
                  copied our templates so easily without any permission from us
                  and then reposted on their websites. Their Karma will hit them
                  really hard. Yeah, that is right.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/images/service-icon-01.png" alt="" />
                    </div>
                    <h4>Best Strategy</h4>
                    <p>
                      Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/images/service-icon-02.png" alt="" />
                    </div>
                    <h4>Creative Ideas</h4>
                    <p>
                      Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h6>Our Team</h6>
                <h4>
                  Our Team <em>Members</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="active">
                          <Alists
                            aboutImg="assets/images/team-member-thumb-01.jpg"
                            aboutHeading="Ruby Foster"
                            aboutSpan="CEO-FOUNDER"
                          />
                        </div>
                        <div>
                          <Alists
                            aboutImg="assets/images/team-member-thumb-03.jpg"
                            aboutHeading="Luis Oconnell"
                            aboutSpan="CEO-FOUNDER"
                          />
                        </div>
                        <div>
                          <Alists
                            aboutImg="assets/images/team-member-thumb-02.jpg"
                            aboutHeading="Jackie Riggs"
                            aboutSpan="CEO-FOUNDER"
                          />
                        </div>
                        <div>
                          <Alists
                            aboutImg="assets/images/team-member-thumb-04.jpg"
                            aboutHeading="Alfred Small"
                            aboutSpan="CEO-FOUNDER"
                          />
                        </div>
                        <div>
                          <Alists
                            aboutImg="assets/images/team-member-thumb-05.jpg"
                            aboutHeading="Denis Mitchel"
                            aboutSpan="CEO-FOUNDER"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <li className="active">
                          <AboutLists
                            abHeading="Ruby Foster"
                            abPara="Quinoa roof party squid prism sustainable
                                letterpress cray hammock tumeric man bun mixtape
                                tofu subway tile cronut. Deep v ennui subway
                                tile organic seitan kogi freegan bicycle rights
                                try-hard green juice probably."
                            abFirstSpan="Facebook"
                            abSecoundSpan="Twitter"
                            abLastSpan="Linkedin"
                            abContactBtn="Contact Member"
                            abImage="assets/images/team-member-01.jpg"
                          />
                        </li>
                        <li>
                          <AboutLists
                            abHeading="Luis Oconnell"
                            abPara="Quinoa roof party squid prism sustainable
                                letterpress cray hammock tumeric man bun mixtape
                                tofu subway tile cronut. Deep v ennui subway
                                tile organic seitan kogi freegan bicycle rights
                                try-hard green juice probably."
                            abFirstSpan="Facebook"
                            abSecoundSpan="Twitter"
                            abLastSpan="Linkedin"
                            abContactBtn="Contact Member"
                            abImage="assets/images/team-member-03.jpg"
                          />
                        </li>
                        <li>
                          <AboutLists
                            abHeading="Jackie Riggs"
                            abPara="Quinoa roof party squid prism sustainable
                                letterpress cray hammock tumeric man bun mixtape
                                tofu subway tile cronut. Deep v ennui subway
                                tile organic seitan kogi freegan bicycle rights
                                try-hard green juice probably."
                            abFirstSpan="Facebook"
                            abSecoundSpan="Twitter"
                            abLastSpan="Linkedin"
                            abContactBtn="Contact Member"
                            abImage="assets/images/team-member-02.jpg"
                          />
                        </li>
                        <li>
                          <AboutLists
                            abHeading="Alfred Small"
                            abPara="Quinoa roof party squid prism sustainable
                                letterpress cray hammock tumeric man bun mixtape
                                tofu subway tile cronut. Deep v ennui subway
                                tile organic seitan kogi freegan bicycle rights
                                try-hard green juice probably."
                            abFirstSpan="Facebook"
                            abSecoundSpan="Twitter"
                            abLastSpan="Linkedin"
                            abContactBtn="Contact Member"
                            abImage="assets/images/team-member-04.jpg"
                          />
                        </li>
                        <li>
                          <AboutLists
                            abHeading="Dennis Mitchel"
                            abPara="Quinoa roof party squid prism sustainable
                                letterpress cray hammock tumeric man bun mixtape
                                tofu subway tile cronut. Deep v ennui subway
                                tile organic seitan kogi freegan bicycle rights
                                try-hard green juice probably."
                            abFirstSpan="Facebook"
                            abSecoundSpan="Twitter"
                            abLastSpan="Linkedin"
                            abContactBtn="Contact Member"
                            abImage="assets/images/team-member-04.jpg"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Banner />

      <Testimonials />

      <OurOffice />
    </>
  );
};
