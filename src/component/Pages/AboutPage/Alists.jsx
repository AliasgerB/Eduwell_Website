import React from "react";

export const Alists = (props) => {
  return (
    <>
      <img src={process.env.PUBLIC_URL + `${props.aboutImg}`} alt="" />
      <h4>{props.aboutHeading}</h4>
      <span>{props.aboutSpan}</span>
    </>
  );
};
