import React from "react";
import SingleActivity from "./SingleActivity";

const PendingActivities = ({ pendingActivities }) => {
  return (
    <div className="listActivities">
      <h6 className="font-weight-normal py-4 border-bottom">Today 15th june</h6>
      <ul className="list-group list-group-flush">
        {pendingActivities.length > 0 &&
          pendingActivities.map((act) => <SingleActivity activity={act} />)}
      </ul>
    </div>
  );
};

export default PendingActivities;
