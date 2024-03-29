import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import StarRating from "react-rating-stars-component";
import { setShowPopup } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";

function ImageContainer({ image }) {
  const [showFavPopup, setShowFavPopup] = useState(false);
  const [randomViews, setRandomViews] = useState(0);
  const [favoriteClicked, setFavoriteClicked] = useState(false);
  const [randomUser, setRandomUser] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch()

  const randomRating = (Math.floor(Math.random() * 4) + 7) / 2;

  const starRatingSize = (() => {
    if (windowWidth > 992) return 44;
    if (windowWidth > 768) return 38;
    return 32;
  })();

  const handleFavoriteClick = () => {
    setFavoriteClicked(!favoriteClicked);
  
    const text = favoriteClicked
      ? "Removed from favorites"
      : "Image has been added to favorites";
  
    dispatch(setShowPopup({ show: true, text}));
  
    // Remove focus after 100ms
    setTimeout(() => {
      document.activeElement.blur();
    }, 100);
  };

  // Show popup on rating stars while clicked
  const handleRatingClick = () => {
    setShowFavPopup(true);
    setTimeout(() => {
      setShowFavPopup(false);
    }, 1000);
  };

  // Generate random nickname for a username
  useEffect(() => {
    const generateRandomUsername = faker.internet.userName;
    setRandomUser(generateRandomUsername());
  }, []);

  // Prevents to re-generate views after every interaction with rating stars
  useEffect(() => {
    const views = Math.floor(Math.random() * (500000 - 300 + 1)) + 300;
    setRandomViews(views);
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="image-container">
      <figure>
        <div>
          <img src={image} alt="cat" className="image-container__image" />
        </div>
        <div className="image-container__info">
          <div className="image-container__info-wrapper">
            <p className="image-container__info-views">{randomViews}</p>
            <GrView className="image-container__info-views-icon"/>
          </div>
          <div className="image-container__rating" onClick={handleRatingClick}>
            <div
              className={`image-container__popup ${
                showFavPopup ? "rating-show-popup" : ""
              }`}
            >
              <p>Rated!</p>
            </div>
            <StarRating
              count={5}
              size={starRatingSize}
              activeColor="#ff9000"
              isHalf={true}
              value={randomRating}
            />
          </div>
        </div>
        <div className="image-container__favorite">
          <p className="image-container__favorite-text">
            Add this image to your favorites
          </p>
          <AiFillHeart
            className={`image-container__heart-icon ${
              favoriteClicked ? "favorite-clicked" : ""
            }`}
            onClick={handleFavoriteClick}
          />
        </div>
        <p className="image-container__username">@{randomUser}</p>
      </figure>
    </div>
  );
}

export default ImageContainer;
