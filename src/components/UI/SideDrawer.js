import React from "react";
import { Nav } from "react-bootstrap";

const SideDrawer = ({ closed, drawerShow }) => {
  return (
    <div>
      <div
        className={`sideDrawer ${
          drawerShow ? "sideDrawer_show" : "sideDrawer_close"
        }`}
      >
        <Nav className="flex-column ">
          <Nav.Link onClick={closed}>Wallet</Nav.Link>
          <Nav.Link onClick={closed}>History</Nav.Link>
          <Nav.Link onClick={closed}>Recipients</Nav.Link>
          <Nav.Link onClick={closed}>QR Codes</Nav.Link>
        </Nav>
      </div>

      <div
        className={`header_overlay ${
          drawerShow ? " overlay_active" : "sideDrawer_close"
        }`}
        onClick={closed}
      ></div>
    </div>
  );
};

export default SideDrawer;
