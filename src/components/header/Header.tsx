import React, { useContext, useEffect, useState } from "react";
import Logotype from "../logotype/Logotype";
import NavBar from "./navBar/Navbar";
import ServiceButtons from "./serviceButtons/ServiceButtons";
import "./header.scss";
import SearchBar from "./searchBar/SearchBar";
import { ThemeContext } from "../../layout/Layout";
import useMatchMedia from "../../hooks/useMatchMedia";
import BurgerMenuButton from "./burgerMenuButton/BurgerMenuButton";
import { Product, productCategories } from "../../constants/productCategories";
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

interface HeaderProps {
  toggleTheme: () => void;
}

function Header({ toggleTheme }: HeaderProps) {
  const theme = useContext(ThemeContext);
  const [currentCategory, setCurrentCategory] = useState("");
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isBurgerBtnVisible, setIsBurgerBtnVisible] = useState(false);
  const [subcategoryList, setSubcategoryList] = useState<Product[]>([]);
  const [elementCoordinate, setElementCoordinate] = useState<number[]>([0, 0]);
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const isWideScreen = useMatchMedia("(max-width: 768px)");
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  // function update() {
  //   const prevScrollY = scrollY.getPrevious();
  //   const currentScrollY = scrollY.get();

  //   if (currentScrollY < prevScrollY) {
  //     setHidden(false);
  //   } else if (currentScrollY > 100 && currentScrollY > prevScrollY) {
  //     setHidden(true);
  //   }
  // }

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  React.useEffect(() => {
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
    if (isWideScreen) {
      setIsBurgerBtnVisible(true);
    }
  }, [isWideScreen]);

  const toggleBurgerButton = () => {
    setIsBurgerBtnVisible((prev) => !prev);
    setSubcategoryList([]);
  };

  const handleSearchButtonClick = () => {
    setIsSearchBarVisible((prev) => !prev);
  };

  const createSubcategoriesList = (
    category: string,
    e: React.SyntheticEvent
  ) => {
    e.stopPropagation();
    if (category === currentCategory && subcategoryList.length > 0) {
      setSubcategoryList([]);
    } else {
      setCurrentCategory(category);
      const filtered = productCategories.filter(
        (obj) => obj.category === category
      );
      const categories: Product[] = subcategoryList?.filter(
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
  };

  useEffect(() => {
    if (currentCategoryId !== 0) {
      dispatch(filterProductCategory(currentCategoryId));
    }
  }, [currentCategoryId]);

  const resetSubcategoryList = () => {
    setSubcategoryList([]);
  };

  const addElementCoordinate = (
    offsetLeft: number,
    offsetTop: number,
    offsetHeight: number
  ) => {
    offsetLeft = offsetLeft || elementCoordinate[0];
    const offsetBottom = offsetHeight + offsetTop;
    setElementCoordinate([offsetLeft, offsetBottom]);
  };

  const navigateTo = (path: string) => {
    navigator(path);
    toggleBurgerButton();
  };

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
          toggleTheme={toggleTheme}
          handleSearchButtonClick={handleSearchButtonClick}
          theme={theme}
        />
      </div>
      <SearchBar
        isVisible={isSearchBarVisible}
        handleSearchButtonClick={handleSearchButtonClick}
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

// const createSubcategoriesList = (
//   category: string,
//   e: React.SyntheticEvent
// ) => {
//   e.stopPropagation();
//   if (category === currentCategory && subcategoryList.length > 0) {
//     setSubcategoryList([]);
//   } else {
//     setCurrentCategory(category);
//     let filtered = productCategories.filter(
//       (obj) => obj.category === category
//     );
//     if (filtered.length === 0) {
//       const categories: Product[] = subcategoryList?.filter(
//         (obj) => obj.categories
//       );
//       filtered = categories.filter((obj) => obj.category === category);
//     }
//     if (!filtered || filtered.length === 0) {
//       setSubcategoryList([]);
//       choiceSelectedCategoryId(category);
//       navigateTo(ROUTES.category(category));
//     } else {
//       const filteredObj = filtered?.[0];
//       if (filteredObj) {
//         if (filteredObj.categories) {
//           setSubcategoryList([...filteredObj.categories]);
//         } else {
//           setSubcategoryList([]);
//           choiceSelectedCategoryId(category);
//           navigateTo(ROUTES.category(category));
//         }
//       }
//     }
//   }
// };
