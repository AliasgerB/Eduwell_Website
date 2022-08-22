import React from "react";
import Contact from "../../Contact/Contact";
import { ContactLists } from "./ContactLists";

export const ContactUsPage = () => {
  return (
    <>
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-text">
                <h4>Say Hello EduWell</h4>
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading">
                <h6>More Info</h6>
                <h4>
                  Read More <em>About Us</em>
                </h4>
              </div>
              <p>
                Trust fund nocore broklyn humblebrag mustache pork kitsch,
                bicycle rights hexagon schlitz keytar palo is santo drinking
                vinegar fam ramps. <br />
                <br />
                Four dollar toast and edison bulb vinyl, listicle hashtag pug
                scenester typewrit er yuccie street artboard or whatever to fill
                place.
              </p>
              <ul>
                <li>- Selfies you probably haven't heard of them.</li>
                <li>- Tousled cold-pressed chicharrones yuccie.</li>
                <li>- Pabst iPhone chartreuse shabby chic tumeric.</li>
                <li>- Scenester normcore mumblecore snackwave.</li>
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1 align-self-center">
              <div className="row">
                <ContactLists countdigit="125" counttitle="Finished Projects" />
                <ContactLists countdigit="11" counttitle="Years Experience" />
                <ContactLists countdigit="87" counttitle="Happy Clients" />
                <ContactLists countdigit="24" counttitle="Awwards Won" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};
