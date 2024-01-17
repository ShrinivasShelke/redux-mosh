import React from "react";
import { useDogContext } from "../DogContext";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const BreedPhotos = () => {
  const { selectedBreed, breedPhotos } = useDogContext();

  return (
    <div>
      {selectedBreed && (
        <>
          <Typography variant="h5" gutterBottom style={{ margin:'2em 0 2em 4em', textTransform: "capitalize", color:'blue'}}>
            {selectedBreed} Photos
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap",marginLeft:'5em'}}>
            {breedPhotos.map((photo, index) => (
              <Card key={index} style={{ width: "200px", margin: "8px" }}>
                <CardMedia
                  component="img"
                  alt={`Breed ${selectedBreed} ${index + 1}`}
                  height="140"
                  image={photo}
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                />
                <CardContent>
                  <Typography variant="subtitle2">
                    {selectedBreed} - {index + 1}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BreedPhotos;
