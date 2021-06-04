import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Topbar/Topbar";
import Wallet from "../Wallet/Wallet";

const Header = () => {
  return (
    <section className="header">
      <Container>
        <Navbar />
        <Wallet />
      </Container>
    </section>
  );
};

export default Header;
