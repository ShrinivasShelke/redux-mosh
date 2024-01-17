import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const DogForm = ({ onSubmit, initialBreed = "" }) => {
  const [breed, setBreed] = useState(initialBreed);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(breed);
    setBreed("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Dog Breed"
        variant="outlined"
        fullWidth
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default DogForm;
