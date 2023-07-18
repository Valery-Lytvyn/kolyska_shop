import { useState } from "react";
import { sortButtonData } from "../../constants/constants";
import TextButton from "../../components/textButton/TextButton";
import "./sortButton.scss";

interface SortButtonProps {
  requestSort: (arg0: "name" | "price" | null) => void;
}

function SortButton({ requestSort }: SortButtonProps) {
  const [sortButtonValue, setSortButtonValue] = useState("Сортувати");
  const [isShowSortVariants, setIsShowSortVariants] = useState(false);
  return (
    <div
      className="sort-button"
      onMouseEnter={() => setIsShowSortVariants(true)}
      onMouseLeave={() => setIsShowSortVariants(false)}
    >
      {isShowSortVariants ? (
        <ul className="sort-button-list">
          {sortButtonData.map(({ sortTitle, sortConfig }) => (
            <li
              key={sortTitle}
              className="sort-button-item"
              onClick={() => {
                requestSort(sortConfig);
                setSortButtonValue(`Відсортовано: ${sortTitle}`);
                setIsShowSortVariants(false);
              }}
            >
              <div className="sort-button-item-value">{sortTitle}</div>
            </li>
          ))}
        </ul>
      ) : (
        <TextButton text={sortButtonValue} />
      )}
    </div>
  );
}

export default SortButton;
