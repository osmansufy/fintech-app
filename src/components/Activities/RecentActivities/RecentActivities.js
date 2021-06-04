import React, { useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { activitiesAsync } from "../../../features/fintechActivities/activitiesSlice";

const RecentActivities = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activitiesAsync());
  }, []);
  const approvedActivities = useSelector(
    (state) => state.activities.approvedActivities
  );
  return (
    <div>
      <h4>Recent Activities</h4>

      <div className="allActivitiesWrapper bg-white">
        <div className="d-flex justify-content-between">
          <div className="navWrapper">
            <Nav variant="pills" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link className="px-4" eventKey="link-1">
                  Recent
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="px-4" eventKey="link-2">
                  Pending
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Nav.Link>See all</Nav.Link>
        </div>
        <div className="listActivities">
          <ul className="list-group list-group-flush">
            {approvedActivities.length > 0 &&
              approvedActivities.map((act) => (
                <li className="list-group-item">
                  <img src={`images/${act.profile}`} alt="" />
                  <div className="actInfo">
                    <p>Dollar Balance (Primary)</p>
                    <p className="text-muted">
                      to{act.name}.{act.email}
                    </p>
                  </div>
                  <div className="amountInfo">
                    +${act.amount}
                    <Button variant="outline-dark">{act.status}</Button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
