import React from "react";
import SingleAction from "./SingleAction";

const Actions = () => {
  return (
    <div className="row">
      <div className="col-6 mb-3">
        <SingleAction />
      </div>
      <div className="col-6 mb-md-3">
        <SingleAction />
      </div>
      <div className="col-6 mb-3">
        <SingleAction />
      </div>
      <div className="col-6 mb-3">
        <SingleAction />
      </div>
    </div>
  );
};

export default Actions;
