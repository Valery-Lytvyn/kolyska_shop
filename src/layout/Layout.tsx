import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ToastMessage from "../components/toastMessage/ToastMessage";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import "./layout.scss";

export const ThemeContext = createContext("light");

function Layout() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleThemeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme === "light" ? "" : "dark-theme"}`}>
        <Header toggleThemeHandler={toggleThemeHandler} />
        <main className="main">
          <ScrollToTop />
          <Outlet />
          <ToastMessage />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
