import React, { useState } from "react";
import { Card } from "react-bootstrap";
import AddBalanceModal from "./AddBalanceModal";

const AddBalance = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card
        onClick={handleShow}
        className="mr-4 shadow singleWallet addBalance"
      >
        <div className="d-flex h-100 justify-content-center align-items-center">
          <h5 className="font-weight-normal">Add Balance</h5>
        </div>
      </Card>
      <AddBalanceModal show={show} handleClose={handleClose} />
    </>
  );
};

export default AddBalance;
