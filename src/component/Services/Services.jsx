import React from "react";
import { Slists } from "./Slists";

const services = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h6>Our Services</h6>
                <h4>
                  Provided <em>Services</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="owl-service-item owl-carousel">
                <Slists
                  servicesImg="assets/images/service-icon-01.png"
                  servicesHeading="Useful Tricks"
                  servicesPara="EduWell is the professional HTML5 template for your school or university websites."
                />
                <Slists
                  servicesImg="assets/images/service-icon-02.png"
                  servicesHeading="Creative Ideas"
                  servicesPara="You can download and use this EduWell Template for your teaching and learning stuffs."
                />
                <Slists
                  servicesImg="assets/images/service-icon-03.png"
                  servicesHeading="Ready Target"
                  servicesPara="Please tell your friends about the best CSS template website that is TemplateMo."
                />
                <Slists
                  servicesImg="assets/images/service-icon-04.png"
                  servicesHeading="Technology"
                  servicesPara=" Aenean bibendum consectetur ex eu porttitor. Pellentesque
                      id ultrices metus."
                />
                <Slists
                  servicesImg="assets/images/service-icon-01.png"
                  servicesHeading="Technology"
                  servicesPara=" Aenean bibendum consectetur ex eu porttitor. Pellentesque
                      id ultrices metus."
                />
                <Slists
                  servicesImg="assets/images/service-icon-02.png"
                  servicesHeading="Useful Tricks"
                  servicesPara=" In non nisi eget magna efficitur ultricies non quis
                      sapien. Pellentesque tellus."
                />
                <Slists
                  servicesImg="assets/images/service-icon-03.png"
                  servicesHeading="Creative Ideas"
                  servicesPara="  Aenean bibendum consectetur ex eu porttitor. Pellentesque
                      id ultrices metus."
                />
                <Slists
                  servicesImg="assets/images/service-icon-04.png"
                  servicesHeading="Ready Target"
                  servicesPara="  In non nisi eget magna efficitur ultricies non quis
                      sapien. Pellentesque tellus."
                />
                <Slists
                  servicesImg="assets/images/service-icon-01.png"
                  servicesHeading="Technology"
                  servicesPara=" Aenean bibendum consectetur ex eu porttitor. Pellentesque
                      id ultrices metus."
                />
                <Slists
                  servicesImg="assets/images/service-icon-02.png"
                  servicesHeading="Useful Tricks"
                  servicesPara=" In non nisi eget magna efficitur ultricies non quis
                      sapien. Pellentesque tellus."
                />
                <Slists
                  servicesImg="assets/images/service-icon-03.png"
                  servicesHeading="Creative Ideas"
                  servicesPara="  Aenean bibendum consectetur ex eu porttitor. Pellentesque
                      id ultrices metus."
                />
                <Slists
                  servicesImg="assets/images/service-icon-04.png"
                  servicesHeading="Ready Target"
                  servicesPara="  In non nisi eget magna efficitur ultricies non quis
                      sapien. Pellentesque tellus."
                />
                <Slists
                  servicesImg="assets/images/service-icon-01.png"
                  servicesHeading="Technology"
                  servicesPara=" Aenean bibendum consectetur ex eu porttitor. Pellentesque
                      id ultrices metus."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default services;
