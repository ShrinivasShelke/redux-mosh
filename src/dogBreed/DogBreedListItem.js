import { ListItem, Typography } from "@mui/material";

const DogBreedListItem = ({ breed, onClick }) => (
  <ListItem
    button
    style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      marginRight: "8px",
      marginBottom: "8px",
      width: "10%",
    }}
    onClick={onClick}
  >
    <Typography style={{ textTransform: "capitalize" }}>{breed}</Typography>{" "}
  </ListItem>
);

export default DogBreedListItem;
