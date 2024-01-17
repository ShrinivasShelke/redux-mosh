import React, { useState, useEffect } from "react";
import { List, Typography, CircularProgress,Button  } from "@mui/material";
import { useDogContext } from "../DogContext";
import { useNavigate } from "react-router-dom";
import DogBreedListItem from "./DogBreedListItem";
import CreateBreedModal from "./CreateBreedModal";

function ListDogBreed() {
  const { setDogData } = useDogContext();
  const [dogsData, setDogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        setDogsData(data);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const listDogHandler = (breed) => {
    setLoading(true);
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => res.json())
      .then((data) => {
        setDogData(breed, data.message);
        setLoading(false);
        navigate(`/breed/${breed}`);
      });
  };
  const handleCreateBreed = (newBreed) => {
    setDogsData((prevData) => ({
      ...prevData,
      message: {
        ...prevData.message,
        [newBreed]: [],
      },
    }));
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center",margin:'5em'}}>
            <Typography variant="h5" gutterBottom style={{ flex: "0.92" }}>
              List of Dog Breeds
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setModalOpen(true)}
              style={{ marginLeft: "16px" }}
            >
              Add new Dog Breed
            </Button>
          </div>

          <div style={{ height: "70vh", margin: "0 7em 0 5em" }}>
            <List
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {Object.keys(dogsData.message).map((breed) => (
                <DogBreedListItem
                  key={breed}
                  breed={breed}
                  onClick={() => listDogHandler(breed)}
                />
              ))}
            </List>
          </div>
          <CreateBreedModal
            open={isModalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleCreateBreed}
          />
        </>
      )}
    </>
  );
}

export default ListDogBreed;
