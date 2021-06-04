import React from "react";
const SingleAction = ({ action }) => {
  return (
    <div
      className={`actionWrapper ${
        action.actionType == "Withdraw" ? "bg-warning" : ""
      }`}
    >
      <div className="actionIcon">
        <img src={action.icon} alt="" />
      </div>
      <h6 className="text-white">{action.actionType}</h6>
    </div>
  );
};

export default SingleAction;
