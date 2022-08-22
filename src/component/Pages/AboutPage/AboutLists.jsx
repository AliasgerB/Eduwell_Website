import React from "react";

export const AboutLists = (props) => {
  return (
    <>
      <div>
        <div className="left-content">
          <h4>{props.abHeading}</h4>
          <p>{props.abPara}</p>
          <span>
            <a href="#">{props.abFirstSpan}</a>
          </span>
          <span>
            <a href="#">{props.abSecoundSpan}</a>
          </span>
          <span className="last-span">
            <a href="#">{props.abLastSpan}</a>
          </span>
          <div className="text-button">
            <a href="contact-us.html">{props.abContactBtn}</a>
          </div>
        </div>
        <div className="right-image">
          <img src={process.env.PUBLIC_URL + `${props.abImage}`} alt="" />
        </div>
      </div>
    </>
  );
};
