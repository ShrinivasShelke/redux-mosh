import { Route, Routes } from "react-router-dom";
import "./App.css";
import BreedPhotos from "./dogBreed/BreedPhotos";
// import CreateDogBreedForm from "./dogBreed/CreateDogBrredForm";
import ListDogBreed from "./dogBreed/ListDogBreed";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" default element={<ListDogBreed />} />
        <Route path="/breed/:breedName" element={<BreedPhotos />} />
      </Routes>
    </>
  );
}

export default App;
