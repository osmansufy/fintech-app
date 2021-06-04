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

      <div className="allActivitiesWrapper px-4 pt-2 pb-5 bg-white">
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
          <h6 className="font-weight-normal py-4 border-bottom">
            Today 15th june
          </h6>
          <ul className="list-group list-group-flush">
            {approvedActivities.length > 0 &&
              approvedActivities.map((act) => (
                <li className="list-group-item d-flex justify-content-between">
                  <div className="flex-grow-1 d-flex">
                    <div className="d-flex mr-3 justify-content-between align-items-center">
                      <img src={`images/${act.profile}`} alt="" />
                    </div>
                    <div className="actInfo">
                      <p>Dollar Balance (Primary)</p>
                      <p className="text-muted">
                        to{act.name}.{act.email}
                      </p>
                    </div>
                  </div>

                  <div className="amountInfo d-flex flex-column">
                    <h4>+${act.amount}</h4>
                    <Button className="py-1 px-3" variant="outline-dark">
                      {act.status}
                    </Button>
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
