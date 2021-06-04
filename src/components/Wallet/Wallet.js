import React from "react";
import { CardGroup } from "react-bootstrap";
import SingaleWallet from "./SingaleWallet";
const Wallet = () => {
  return (
    <section className="wallet">
      <div className="title">
        <h3>Wallet</h3>
        <h3>Dashboard</h3>
      </div>
      <CardGroup>
        <SingaleWallet />
        <SingaleWallet />
        <SingaleWallet />
      </CardGroup>
    </section>
  );
};

export default Wallet;
