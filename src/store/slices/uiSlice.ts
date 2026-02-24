import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "dark" | "light";

interface UIState {
  mobileMenuOpen: boolean;
  activeSection: string;
  theme: Theme;
}

const initialState: UIState = {
  mobileMenuOpen: false,
  activeSection: "home",
  theme: "dark",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  setActiveSection,
  setTheme,
  toggleTheme,
} = uiSlice.actions;
export default uiSlice.reducer;
