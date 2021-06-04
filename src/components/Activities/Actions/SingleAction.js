import React from "react";
import payIcon from "../../../assets/images/payIcon.png";
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
