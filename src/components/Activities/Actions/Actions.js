import React from "react";
import SingleAction from "./SingleAction";
import payIcon from "../../../assets/images/payIcon.png";
import requestIcon from "../../../assets/images/RequestIcon.png";
import DepositIcon from "../../../assets/images/DepositIcon.png";
import WithdrawIcon from "../../../assets/images/WithdrawIcon.png";
const allActions = [
  {
    icon: payIcon,
    actionType: "Pay",
  },
  {
    icon: requestIcon,
    actionType: "Request",
  },
  {
    icon: DepositIcon,
    actionType: "TopUp",
  },
  {
    icon: WithdrawIcon,
    actionType: "Withdraw",
  },
];
const Actions = () => {
  return (
    <div className="row">
      {allActions.map((action) => (
        <div key={action.actionType} className="col-6 mb-3">
          <SingleAction action={action} />
        </div>
      ))}
    </div>
  );
};

export default Actions;
