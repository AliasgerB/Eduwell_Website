import React from "react";

const Lists = (props) => {
  return (
    <>
      <div>
        <div className="left-image">
          <img
            src={process.env.PUBLIC_URL + `${props.Courses_img}`}
            alt="images"
          />
          <div className="price">
            <h6>{props.Courses_price}</h6>
          </div>
        </div>
        <div className="right-content">
          <h4>{props.Courses_heading}</h4>
          <p>{props.Courses_para}</p>
          <span>{props.Courses_hours}</span>
          <span>{props.Courses_week}</span>
          <span className="last-span">{props.Courses_lastSpan}</span>
          <div className="text-button">
            <a href="contact-us.html">Subscribe Course</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
