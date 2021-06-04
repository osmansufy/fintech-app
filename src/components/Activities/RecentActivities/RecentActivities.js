import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { activitiesAsync } from "../../../features/fintechActivities/activitiesSlice";
import ApprovedActivities from "./ApprovedActivities";
import PendingActivities from "./PendingActivities";

const RecentActivities = () => {
  const [activitiesTab, setActivitiesTab] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activitiesAsync());
  }, []);

  const approvedActivities = useSelector(
    (state) => state.activities.approvedActivities
  );
  const pendingActivities = useSelector(
    (state) => state.activities.pendingActivities
  );
  const onChangeTab = (eventKey) => {
    console.log(eventKey);
  };
  return (
    <div>
      <h4>Recent Activities</h4>

      <div className="allActivitiesWrapper px-4 pt-2 pb-5 bg-white">
        <Tab.Container id="left-tabs-example" defaultActiveKey="recent">
          <div className="d-flex justify-content-between">
            <div className="navWrapper">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link
                    onSelect={(eventKey) => onChangeTab(eventKey)}
                    className="px-4"
                    eventKey="recent"
                  >
                    Recent
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onSelect={(eventKey) => onChangeTab(eventKey)}
                    className="px-4"
                    eventKey="pending"
                  >
                    Pending
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <Nav.Link>See all</Nav.Link>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="recent">
              <ApprovedActivities approvedActivities={approvedActivities} />
            </Tab.Pane>
            <Tab.Pane eventKey="pending">
              <PendingActivities pendingActivities={pendingActivities} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default RecentActivities;
