import React from "react";

export const Slists = (props) => {
  return (
    <>
      <div className="item">
        <div className="service-item">
          <div className="icon">
            <img
              src={process.env.PUBLIC_URL + `${props.servicesImg}`}
              alt="images"
            />
          </div>
          <h4>{props.servicesHeading}</h4>
          <p>{props.servicesPara}</p>
        </div>
      </div>
    </>
  );
};
