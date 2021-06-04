import React from "react";
import { Button, Card } from "react-bootstrap";

const SingaleWallet = () => {
  return (
    <Card className="mr-4 shadow singleWallet">
      <div className="walletInfoWrapper p-3">
        <div className="topWrap">
          <h4 className="type">Dollar Balance</h4>
          <Button variant="outline-primary">Primary</Button>{" "}
        </div>
        <div className="bottomWrap">
          <p className="text-muted">Available balance</p>
          <h5 className="amount">$ 2780,00</h5>
        </div>
      </div>
    </Card>
  );
};

export default SingaleWallet;
