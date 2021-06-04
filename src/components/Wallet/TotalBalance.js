import React from "react";
import { Card } from "react-bootstrap";
import SingleWallet from "./SingleWallet";

const TotalBalance = ({ totalBalance }) => {
  return (
    <Card className="mr-4 shadow singleWallet">
      <SingleWallet isPrimary={false} amount={totalBalance} />
    </Card>
  );
};

export default TotalBalance;
