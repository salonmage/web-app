import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Modals(props) {
  const [modal, setModal] = useState(false);

  function handleCancelModal() {
    setModal(!modal);
    if (props.handleCancelModal) props.handleCancelModal();
  }

  function handleSubmitModal() {
    setModal(false);
    if (props.handleSubmitModal) props.handleSubmitModal();
  }

  return (
    <div>
      <div onClick={handleCancelModal}>{props.openModalTemplate}</div>
      <Modal
        isOpen={modal}
        toggle={handleCancelModal}
        className={props.className}
      >
        {props.title ? (
          <ModalHeader toggle={handleCancelModal}>{props.title}</ModalHeader>
        ) : null}

        {props.children ? <ModalBody>{props.children}</ModalBody> : null}

        <ModalFooter>
          <Button color="primary" onClick={handleSubmitModal}>
            {props.ok || "Save Changes"}
          </Button>{" "}
          <Button color="secondary" onClick={handleCancelModal}>
            {props.cancel || "Cancel"}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modals;
