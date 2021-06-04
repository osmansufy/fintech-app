import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewBalance } from "../../features/fintechActivities/activitiesSlice";

const AddBalanceModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [newAmount, setNewAmount] = useState();
  const onAddNewAmount = () => {
    dispatch(addNewBalance(Number(newAmount)));
    handleClose();
    setNewAmount();
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Balance to your Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="newAmount">Add Amount</label>
          <br />
          <input
            id="newAmount"
            type="number"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onAddNewAmount}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBalanceModal;
