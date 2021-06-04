import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddBalance from "./AddBalance";
import AvailableBalance from "./AvailableBalance";
import TotalBalance from "./TotalBalance";
const Wallet = () => {
  const totalBalance = useSelector((state) => state.activities.totalBalance);
  const availableBalance = useSelector(
    (state) => state.activities.availableBalance
  );
  return (
    <section className="wallet pt-5">
      <Container>
        <div className="title py-4 text-white">
          <h3>Wallet</h3>
          <h5 className="font-weight-normal">Dashboard</h5>
        </div>
        <CardGroup className="cardWrapper">
          <AvailableBalance availableBalance={availableBalance} />
          <TotalBalance totalBalance={totalBalance} />
          <AddBalance />
        </CardGroup>
      </Container>
    </section>
  );
};

export default Wallet;
