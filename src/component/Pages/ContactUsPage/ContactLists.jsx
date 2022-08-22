import React from "react";

export const ContactLists = (props) => {
  return (
    <>
      <div className="col-6">
        <div className="count-area-content">
          <div className="count-digit">{props.countdigit}</div>
          <div className="count-title">{props.counttitle}</div>
        </div>
      </div>
    </>
  );
};
