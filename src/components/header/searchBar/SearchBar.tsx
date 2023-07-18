import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routing/routes";

import ImageButton from "../../imageButton/ImageButton";
import search from "../../../assets/icon/header_icons/icons8-search-64.png";
import close from "../../../assets/icon/icons8-close-64.png";
import "./searchBar.scss";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../../redux/slices/productsSlice";

interface SearchBarProps {
  isVisible: boolean;
  handleSearchButtonClick: () => void;
  theme: string;
}

function SearchBar({
  isVisible,
  handleSearchButtonClick,
  theme,
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchClickHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const searchRequest = inputValue.trim().toLowerCase();

    if (searchRequest.length > 0) {
      dispatch(searchProduct(searchRequest));
      navigate(ROUTES.search(searchRequest));
    }
    handleSearchButtonClick();
    setInputValue("");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className={`search-bar ${
            theme === "light" ? "" : "light-style-search-bar"
          }`}
          onClick={handleSearchButtonClick}
        >
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <form
              onSubmit={(e) => {
                searchClickHandler(e);
              }}
              className="search-bar-form"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                className="search-bar-input"
                autoFocus
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />
              <div className="search-bar-btn">
                <ImageButton src={search} alt="пошук" theme={theme} />
              </div>
              <div className="search-bar-btn">
                <ImageButton src={close} alt="закрити пошук" theme={theme} />
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SearchBar;
