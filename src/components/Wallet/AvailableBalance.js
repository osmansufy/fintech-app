import React from "react";
import { Button, Card } from "react-bootstrap";
import SingleWallet from "./SingleWallet";
const AvailableBalance = ({ availableBalance }) => {
  return (
    <Card className="mr-4 shadow singleWallet">
      <SingleWallet isPrimary={true} amount={availableBalance} />
    </Card>
  );
};

export default AvailableBalance;
