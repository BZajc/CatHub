import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCatBreedsAsync,
  fetchCatImagesAsync,
  selectCatBreeds,
  setUserSelectedBreed,
} from "../store/slices/catImageSlice";
import { useNavigate } from "react-router-dom";
import { setDisplayedBreedName, setActiveSuggestionButton, selectActiveSuggestionButton } from "../store/slices/uiSlice";

function Suggestions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const catBreeds = useSelector(selectCatBreeds);
  const activeSuggestionButton = useSelector(selectActiveSuggestionButton);
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  useEffect(() => {
    dispatch(fetchCatBreedsAsync());
  }, [dispatch]);

  const logRandomBreeds = useCallback(() => {
    if (catBreeds !== undefined && catBreeds.length > 0) {
      // Create copy of an array with breeds
      const breedsCopy = catBreeds.slice();
      // Choose randomly 5 breeds
      const shuffledBreeds = breedsCopy.sort(() => Math.random() - 0.5);
      // Create a new array with a randomly chosen breeds
      const newSelectedBreeds = shuffledBreeds.slice(0, 5);
      setSelectedBreeds(newSelectedBreeds);
    }
  }, [catBreeds]);

  useEffect(() => {
    logRandomBreeds();
  }, [logRandomBreeds]);

  const handleButtonClick = (breed) => {
    const breedObject =
      breed === "Random" ? { name: "Random", id: "Random" } : breed;

    dispatch(setUserSelectedBreed(breedObject)); // object with breed name and id
    dispatch(setActiveSuggestionButton(breedObject.name)); // add class to button so it looks like it was clicked
    dispatch(fetchCatImagesAsync(breedObject.id)); // fetching images with id of the chosen breed
    dispatch(setDisplayedBreedName(breedObject.name)); // setting breed name as text in main__h2
    navigate("/");
  };

  const handleMoreClick = () => {
    navigate("selection");
  };

  return (
    <div className="suggestions">
      <button
        className={`suggestions__option ${
          activeSuggestionButton === "Random" ? "active-suggestions-button" : ""
        }`}
        onClick={() => handleButtonClick("Random")}
      >
        Random
      </button>

      {/* Render 5 buttons based on 5 randomly chosen breeds */}
      {selectedBreeds.map((breed, index) => (
        <button
          key={index}
          className={`suggestions__option ${
            activeSuggestionButton === breed.name ? "active-suggestions-button" : ""
          }`}
          onClick={() => handleButtonClick(breed)}
        >
          {breed.name}
        </button>
      ))}
      <button className="suggestions__option" onClick={handleMoreClick}>
        More...
      </button>
    </div>
  );
}

export default Suggestions;