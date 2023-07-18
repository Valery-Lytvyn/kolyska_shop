import { useState, createContext, useEffect } from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import "./layout.scss";
import ToastMessage from "../components/toastMessage/ToastMessage";
import ScrollToTop from "../components/scrollToTop/scrollToTop";

export const ThemeContext = createContext("light");

function Layout() {
  const [theme, settheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    settheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme === "light" ? "" : "dark-theme"}`}>
        <Header toggleTheme={toggleTheme} />
        <main className="main">
          {/* <div className="container"> */}
          <ScrollToTop />
          <Outlet />
          <ToastMessage />
          {/* </div> */}
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
