import React from "react";
import { Container } from "react-bootstrap";
import Actions from "./Actions/Actions";
import RecentActivities from "./RecentActivities/RecentActivities";

const Activities = () => {
  return (
    <section className="activities">
      <Container>
        <div className="row">
          <div className="col-md-4">
            <Actions />
          </div>
          <div className="col-md-8">
            <RecentActivities />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Activities;
