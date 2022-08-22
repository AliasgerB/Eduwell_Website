import React from "react";
import Tlists from "./Tlists";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h6>Testimonials</h6>
                <h4>
                  What They <em>Think</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="owl-testimonials owl-carousel"
                style={{ position: " relative", zIndex: 5 }}
              >
                <Tlists
                  tpara="“just think about TemplateMo if you need free CSS templates for your website”"
                  tHeading="Catherine Walk"
                  tSpan="CEO &amp; Founder"
                  tImg="assets/images/quote.png"
                />

                <Tlists
                  tpara="“think about our website first when you need free HTML templates for your website”"
                  tHeading="David Martin"
                  tSpan="CTO of Tech Company"
                  tImg="assets/images/quote.png"
                />

                <Tlists
                  tpara="“just think about TemplateMo if you need free CSS templates for your website”"
                  tHeading="Sophia Whity"
                  tSpan="CEO and Co-Founder"
                  tImg="assets/images/quote.png"
                />

                <Tlists
                  tpara="“just think about TemplateMo if you need free CSS templates for your website”"
                  tHeading="Helen Shiny"
                  tSpan="Tech Officer"
                  tImg="assets/images/quote.png"
                />

                <Tlists
                  tpara="“just think about TemplateMo if you need free CSS templates for your website”"
                  tHeading="George Soft"
                  tSpan="Gadget Reviewer"
                  tImg="assets/images/quote.png"
                />

                <Tlists
                  tpara="“just think about TemplateMo if you need free CSS templates for your website”"
                  tHeading="Andrew Hall"
                  tSpan="Marketing Manager"
                  tImg="assets/images/quote.png"
                />

                <Tlists
                  tpara="“just think about TemplateMo if you need free CSS templates for your website”"
                  tHeading="Maxi Power"
                  tSpan="Fashion Designer"
                  tImg="assets/images/quote.png"
                />

                <Tlists
                  tpara="“just think about TemplateMo if you need free CSS templates for your website”"
                  tHeading="Olivia Too"
                  tSpan="Creative Designer"
                  tImg="assets/images/quote.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
