import React from "react";
import { Button } from "react-bootstrap";
const SingleActivity = ({ activity }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="flex-grow-1 d-flex">
        <div className="d-flex mr-3 justify-content-between align-items-center">
          <img src={`images/${activity.profile}`} alt="" />
        </div>
        <div className="actInfo">
          <p>Dollar Balance (Primary)</p>
          <p className="text-muted">
            to{activity.name}.{activity.email}
          </p>
        </div>
      </div>

      <div className="amountInfo d-flex flex-column">
        <h4>+${activity.amount}</h4>
        <Button className="py-1 px-3" variant="outline-dark">
          {activity.status}
        </Button>
      </div>
    </li>
  );
};

export default SingleActivity;
