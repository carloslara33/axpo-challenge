import React, { useState } from "react";
import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ButtonRenderer = ({ data, callback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleActionOne = () => {
    toggleOpen();
  };

  const handleActionTwo = () => {
    callback?.({...data, status: "completed"});
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" onClick={handleActionOne}>
        View
      </button>
      <button type="button" onClick={handleActionTwo}>
        Trade
      </button>

      <Modal
        open={isOpen}
        onClose={toggleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {Object.keys(data).map((key, index) => (
            <p key={`order-data-${index}-${data.id}`}>
              <b>{key}: </b> {data[key]}
            </p>
          ))}
        </Box>
      </Modal>
    </>
  );
};
