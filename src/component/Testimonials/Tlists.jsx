import React from "react";

const Tlists = (props) => {
  return (
    <>
      <div className="item">
        <p>{props.tpara}</p>
        <h4>{props.tHeading}</h4>
        <span>{props.tSpan}</span>
        <img src={process.env.PUBLIC_URL + `${props.tImg}`} alt="images" />
      </div>
    </>
  );
};

export default Tlists;
