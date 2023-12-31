import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showNav: false,
    showUserSidePanel: false,
    displayedBreedName: "",
    activeSuggestionButton: "Random",
    showPopup: {show: false, text: ""}
  },
  reducers: {
    setShowNav: (state, action) => {
      state.showNav = action.payload;
    },
    setShowUserSidePanel: (state, action) => {
      state.showUserSidePanel = action.payload;
    },
    setDisplayedBreedName: (state, action) => {
      state.displayedBreedName = action.payload;
    },
    setActiveSuggestionButton: (state, action) => {
      state.activeSuggestionButton = action.payload;
    },
    setShowPopup: (state, action) => {
      state.showPopup = {
        show: action.payload.show,
        text: action.payload.text,
      };
    }
  },
});

export default uiSlice.reducer;
export const {
  setShowNav,
  setShowUserSidePanel,
  setDisplayedBreedName,
  setActiveSuggestionButton,
  setShowMembershipConfetti,
  setShowPopup,
} = uiSlice.actions;
export const selectShowNav = (state) => state.ui.showNav;
export const selectShowUserSidePanel = (state) => state.ui.showUserSidePanel;
export const selectDisplayedBreedName = (state) => state.ui.displayedBreedName;
export const selectActiveSuggestionButton = (state) => state.ui.activeSuggestionButton
export const selectShowPopup = (state) => state.ui.showPopup