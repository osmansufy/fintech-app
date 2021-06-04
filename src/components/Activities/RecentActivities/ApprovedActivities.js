import React from "react";

import SingleActivity from "./SingleActivity";

const ApprovedActivities = ({ approvedActivities }) => {
  return (
    <div className="listActivities">
      <h6 className="font-weight-normal py-4 border-bottom">Today 15th june</h6>
      <ul className="list-group list-group-flush">
        {approvedActivities.length > 0 &&
          approvedActivities.map((act) => <SingleActivity activity={act} />)}
      </ul>
    </div>
  );
};

export default ApprovedActivities;
