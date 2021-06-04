import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import notificationImg from "../../../assets/images/Notificaion.svg";
import ProfileImg from "../../../assets/images/Profile.png";
import flagImg from "../../../assets/images/flag.png";
import SideDrawer from "../../UI/SideDrawer";
const Topbar = () => {
  const [drawerShow, setDrawerShow] = useState(false);
  const onCLose = () => {
    setDrawerShow(false);
  };
  return (
    <section className="topBar py-3">
      <Container>
        <Navbar collapseOnSelect expand="md" bg="transparent" variant="dark">
          <Navbar.Brand href="#home">Fintech App</Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-5" defaultActiveKey="wallet">
              <Nav.Link className="mx-3" eventKey="wallet">
                Wallet
              </Nav.Link>
              <Nav.Link className="mx-3" eventKey="history">
                History
              </Nav.Link>
              <Nav.Link className="mx-3" eventKey="recipients">
                Recipients
              </Nav.Link>
              <Nav.Link className="mx-3" eventKey="codes">
                QR Codes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

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
          <div className="d-lg-none">
            <span className="menu_trigger" onClick={() => setDrawerShow(true)}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </Navbar>

        <SideDrawer closed={onCLose} drawerShow={drawerShow} />
      </Container>
    </section>
  );
};

export default Topbar;
