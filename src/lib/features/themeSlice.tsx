import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: (typeof window !== 'undefined') && window.localStorage.getItem("theme") === "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setDark: (state) => {
      const newDark = !state.dark;
      
      window.localStorage.setItem("theme", newDark ? "dark" : "light");
      
      state.dark = newDark;
    },
  },
});

export const { setDark } = themeSlice.actions;

export default themeSlice.reducer;
