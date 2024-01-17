// DogCreateFormModal.js
import React, { useState } from "react";
import { Modal, Button, TextField, Typography } from "@mui/material";

const CreateBreedModal = ({ open, onClose, onSubmit }) => {
  const [newBreed, setNewBreed] = useState("");

  const handleSubmit = () => {
    onSubmit(newBreed);
    setNewBreed("");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "16px",
          background: "#fff",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Add New Dog Breed
        </Typography>
        <TextField
          label="Breed Name"
          variant="outlined"
          fullWidth
          value={newBreed}
          onChange={(e) => setNewBreed(e.target.value)}
          style={{ marginBottom: "16px" }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default CreateBreedModal;
