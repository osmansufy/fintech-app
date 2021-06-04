import React from "react";
import { Button } from "react-bootstrap";

const SingleWallet = ({ amount, isPrimary }) => {
  return (
    <div className="walletInfoWrapper h-100 p-3">
      <div className="topWrap mb-3">
        <h4 className="type">Dollar Balance</h4>
        {isPrimary && <Button variant="outline-primary">Primary</Button>}
      </div>
      <div className="bottomWrap">
        <p className="text-muted">Available balance</p>
        <h5 className="amount">$ {amount}</h5>
      </div>
    </div>
  );
};

export default SingleWallet;
