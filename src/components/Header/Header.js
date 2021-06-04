import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Topbar/Topbar";
import Wallet from "../Wallet/Wallet";

const Header = () => {
  return (
    <section className="header pt-4 border-bottom">
      <Navbar />
      <Wallet />
    </section>
  );
};

export default Header;
