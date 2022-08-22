import React from "react";
import { Banner } from "../Banner/Banner";
import Lists from "./Lists";

const Courses = () => {
  return (
    <>
      <section className="our-courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h6>OUR COURSES</h6>
                <h4>
                  What You Can <em>Learn</em>
                </h4>
                <p>
                  You just think about TemplateMo whenever you need free CSS
                  templates for your business website
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="menu">
                        <div className="active gradient-border">
                          <span>Web Development</span>
                        </div>
                        <div className="gradient-border">
                          <span>Graphic Design</span>
                        </div>
                        <div className="gradient-border">
                          <span>Web Design</span>
                        </div>
                        <div className="gradient-border">
                          <span>WordPress</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <ul className="nacc">
                        <li className="active">
                          <Lists
                            Courses_img="assets/images/courses-01.jpg"
                            Courses_price="$128"
                            Courses_heading="Web Development"
                            Courses_para={[
                              "<p>Did you know that you can visit",
                              <a
                                rel="noreferrer"
                                href="https://www.toocss.com/"
                                target="_blank"
                              >
                                TooCSS website
                              </a>,
                              "for latest listing of HTML templates and a variety of useful templates.",
                              <br />,
                              <br />,
                              "You just need to go and visit that website right now. IF you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.</p>",
                            ]}
                            Courses_hours="36 Hours"
                            Courses_week="4 Weeks"
                            Courses_lastSpan="3 Certificates"
                          />
                        </li>
                        <li>
                          <Lists
                            Courses_img="assets/images/courses-02.jpg"
                            Courses_price="$156"
                            Courses_heading="Creative Graphic Design"
                            Courses_para={[
                              "You are not allowed to redistribute this template ZIP file on any other website without a permission from us.",
                              <br />,
                              <br />,
                              "There are some unethical people on this world copied and reposted our templates without any permission from us. Their Karma will hit them really hard. Yeah!",
                            ]}
                            Courses_hours="48 Hours"
                            Courses_week="6 Weeks"
                            Courses_lastSpan="1 Certificates"
                          />
                        </li>
                        <li>
                          <Lists
                            Courses_img="assets/images/courses-03.jpg"
                            Courses_price="$184"
                            Courses_heading="Web Design"
                            Courses_para={[
                              "Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.",
                              <br />,
                              <br />,
                              "Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.",
                            ]}
                            Courses_hours="28 Hours"
                            Courses_week="4 Weeks"
                            Courses_lastSpan="1 Certificates"
                          />
                        </li>
                        <li>
                          <Lists
                            Courses_img="assets/images/courses-03.jpg"
                            Courses_price="$184"
                            Courses_heading="Web Design"
                            Courses_para={[
                              "Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.",
                              <br />,
                              <br />,
                              "Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.",
                            ]}
                            Courses_hours="48 Hours"
                            Courses_week="4 Weeks"
                            Courses_lastSpan="2 Certificates"
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
    </>
  );
};

export default Courses;
