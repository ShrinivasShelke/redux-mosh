import { createContext, useContext, useState } from "react";

const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [breedPhotos, setBreedPhotos] = useState([]);

  const setDogData = (breed, photos) => {
    setSelectedBreed(breed);
    setBreedPhotos(photos);
  };

  return (
    <DogContext.Provider value={{ selectedBreed, breedPhotos, setDogData }}>
      {children}
    </DogContext.Provider>
  );
};

export const useDogContext = () => {
  return useContext(DogContext);
};
