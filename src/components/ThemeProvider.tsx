"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setTheme } from "@/store/slices/uiSlice";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("srd-theme") as "dark" | "light" | null;
    if (saved) {
      dispatch(setTheme(saved));
    }
  }, [dispatch]);

  // Sync theme to <html> and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("srd-theme", theme);
  }, [theme]);

  return <>{children}</>;
}
