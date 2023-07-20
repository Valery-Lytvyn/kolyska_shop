import React, { useContext, useEffect, useState, useCallback } from "react";
import Logotype from "../logotype/Logotype";
import NavBar from "./navBar/Navbar";
import ServiceButtons from "./serviceButtons/ServiceButtons";

import SearchBar from "./searchBar/SearchBar";
import { ThemeContext } from "../../layout/Layout";
import useMatchMedia from "../../hooks/useMatchMedia";
import BurgerMenuButton from "./burgerMenuButton/BurgerMenuButton";
import {
  ProductCategories,
  productCategories,
} from "../../constants/productCategories";
import {
  choiceSelectedCategoryId,
  getRndInteger,
} from "../../services/services";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routing/routes";
import { useDispatch } from "react-redux";
import { filterProductCategory } from "../../redux/slices/productsSlice";
import SocialMediaIcons from "../socialMediaIcons/SocialMediaIcons";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import "./header.scss";

interface HeaderProps {
  toggleThemeHandler: () => void;
}

function Header({ toggleThemeHandler }: HeaderProps) {
  const theme = useContext(ThemeContext);
  const [currentCategory, setCurrentCategory] = useState("");
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isBurgerBtnVisible, setIsBurgerBtnVisible] = useState(false);
  const [subcategoryList, setSubcategoryList] = useState<ProductCategories[]>(
    []
  );
  const [elementCoordinate, setElementCoordinate] = useState<number[]>([0, 0]);
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const isWideScreen = useMatchMedia("(max-width: 768px)");
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  useEffect(() => {
    function update() {
      const prevScrollY = scrollY.getPrevious();
      const currentScrollY = scrollY.get();

      if (currentScrollY < prevScrollY) {
        setHidden(false);
      } else if (currentScrollY > 100 && currentScrollY > prevScrollY) {
        setHidden(true);
      }
    }

    const unsubscribe = scrollY.on("change", update);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  useEffect(() => {
    setIsBurgerBtnVisible(isWideScreen);
  }, [isWideScreen]);

  const toggleBurgerButton = useCallback(() => {
    setIsBurgerBtnVisible((prev) => !prev);
    setSubcategoryList([]);
  }, []);

  const searchButtonHandler = useCallback(() => {
    setIsSearchBarVisible((prev) => !prev);
  }, []);

  const createSubcategoriesList = useCallback(
    (category: string, e: React.SyntheticEvent) => {
      e.stopPropagation();

      if (category === currentCategory && subcategoryList.length > 0) {
        setSubcategoryList([]);
      } else {
        setCurrentCategory(category);

        const filtered = productCategories.filter(
          (obj) => obj.category === category
        );
        const categories: ProductCategories[] = subcategoryList.filter(
          (obj) => obj.categories
        );
        const filteredCategories = categories.filter(
          (obj) => obj.category === category
        );
        const filteredObj = filtered[0] || filteredCategories[0];

        if (!filteredObj || !filteredObj.categories) {
          setSubcategoryList([]);

          const categoryID = choiceSelectedCategoryId(category);
          setCurrentCategoryId(categoryID);
          navigateTo(ROUTES.category(category));
        } else {
          setSubcategoryList([...filteredObj.categories]);
        }
      }
    },
    [currentCategory, subcategoryList]
  );

  useEffect(() => {
    if (currentCategoryId !== 0) {
      dispatch(filterProductCategory(currentCategoryId));
    }
  }, [currentCategoryId]);

  const resetSubcategoryList = useCallback(() => {
    setSubcategoryList([]);
  }, []);

  const addElementCoordinate = useCallback(
    (offsetLeft: number, offsetTop: number, offsetHeight: number) => {
      offsetLeft = offsetLeft || elementCoordinate[0];
      const offsetBottom = offsetHeight + offsetTop;
      setElementCoordinate([offsetLeft, offsetBottom]);
    },
    [elementCoordinate]
  );

  const navigateTo = useCallback(
    (path: string) => {
      navigator(path);
      toggleBurgerButton();
    },
    [toggleBurgerButton]
  );

  return (
    <motion.header
      initial="hidden"
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.3 }}
      className="header"
    >
      {!isWideScreen && <NavBar />}
      <div className="header-container">
        <SocialMediaIcons />
        <Logotype theme={theme} />
        {isWideScreen && (
          <BurgerMenuButton
            isShowButton={isBurgerBtnVisible}
            theme={theme}
            toggleBurgerButton={toggleBurgerButton}
          />
        )}
        <AnimatePresence>
          {!isBurgerBtnVisible && isWideScreen && (
            <motion.div
              className="burger-navbar"
              onClick={toggleBurgerButton}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="burger-navbar-list">
                <NavBar />
                <CategoriesList
                  array={productCategories}
                  mouseClickHandler={createSubcategoriesList}
                  mouseLeaveHandler={resetSubcategoryList}
                  key={getRndInteger(100000)}
                  className="product-categories"
                  subcategory={subcategoryList}
                  setCoordinate={addElementCoordinate}
                  coordinate={elementCoordinate}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <ServiceButtons
          toggleThemeHandler={toggleThemeHandler}
          searchButtonHandler={searchButtonHandler}
          theme={theme}
        />
      </div>
      <SearchBar
        isVisible={isSearchBarVisible}
        searchButtonHandler={searchButtonHandler}
        theme={theme}
      />
      {!isWideScreen && (
        <CategoriesList
          array={productCategories}
          mouseClickHandler={createSubcategoriesList}
          mouseLeaveHandler={resetSubcategoryList}
          key={getRndInteger(100000)}
          className="product-categories"
          subcategory={subcategoryList}
          setCoordinate={addElementCoordinate}
          coordinate={elementCoordinate}
        />
      )}
    </motion.header>
  );
}

export default Header;
