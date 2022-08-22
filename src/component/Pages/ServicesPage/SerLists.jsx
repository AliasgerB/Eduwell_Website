import React from "react";

export const SerLists = (props) => {
  return (
    <>
      <div className="icon">
        <img src={process.env.PUBLIC_URL + `${props.serImg}`} alt="" />
      </div>
      <h4>{props.serHeading}</h4>
      <p>{props.serPara}</p>
    </>
  );
};
