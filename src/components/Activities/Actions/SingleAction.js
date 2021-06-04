import React from "react";
import payIcon from "../../../assets/images/payIcon.png";
const SingleAction = () => {
  return (
    <div className="actionWrapper">
      <div className="actionIcon">
        <img src={payIcon} alt="" />
      </div>
      <h6>Pay</h6>
    </div>
  );
};

export default SingleAction;
