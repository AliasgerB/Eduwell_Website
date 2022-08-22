import React from "react";
import { Banner } from "../../Banner/Banner";
import { OurOffice } from "../../Our_Office/OurOffice";
import Services from "../../Services/Services";
import { SerLists } from "./SerLists";

export const ServicesPage = () => {
  return (
    <>
      <Services />
      <Banner />

      <section className="featured-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h6>Featured Service</h6>
                <h4>
                  Best Of Our <em>Product</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="left-info">
                <div className="col-lg-12">
                  <div className="info-item">
                    <SerLists
                      serImg="assets/images/service-icon-01.png"
                      serHeading="Best Strategy"
                      serPara=" Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland."
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="info-item last-info">
                    <SerLists
                      serImg="assets/images/service-icon-01.png"
                      serHeading="Best Strategy"
                      serPara=" Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-image">
                <img src="assets/images/featured-product.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="right-info">
                <div className="col-lg-12">
                  <div className="info-item">
                    <SerLists
                      serImg="assets/images/service-icon-01.png"
                      serHeading="Best Strategy"
                      serPara=" Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland."
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="info-item last-info">
                    <SerLists
                      serImg="assets/images/service-icon-01.png"
                      serHeading="Best Strategy"
                      serPara=" Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurOffice />
    </>
  );
};
