import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import notificationImg from "../../../assets/images/Notificaion.svg";
import ProfileImg from "../../../assets/images/Profile.png";
import flagImg from "../../../assets/images/flag.png";
const Topbar = () => {
  return (
    <Navbar bg="transparent" variant="dark">
      <Navbar.Brand href="#home">Fintech App</Navbar.Brand>
      <Nav className="mr-auto ml-5">
        <Nav.Link href="#home">Wallet</Nav.Link>
        <Nav.Link href="#features">History</Nav.Link>
        <Nav.Link href="#pricing">Recipients</Nav.Link>
        <Nav.Link href="#pricing">QR Codes</Nav.Link>
      </Nav>
      <div className="headerContainer align-items-center d-flex justify-content-center">
        <div className="iconWrapper mx-3">
          <img src={notificationImg} alt="" />
        </div>
        <div className="iconWrapper  mx-3">
          <img src={flagImg} alt="" />
        </div>
        <div className="iconWrapper  mx-3">
          <img src={ProfileImg} alt="" />
        </div>
      </div>
    </Navbar>
  );
};

export default Topbar;
