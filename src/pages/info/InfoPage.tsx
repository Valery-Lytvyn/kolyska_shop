import { useState, useEffect } from "react";
import "./infoPage.scss";
import PageTitle from "../../components/pageTitle/PageTitle";
import PageSubtitle from "../../components/pageSubtitle/PageSubtitle";
import { infoPageData } from "../../constants/infoData";
import { AnimatePresence, motion } from "framer-motion";

function InfoPage() {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [isShowChapter, setIsShowChapter] = useState(false);

  const mouseClickHandler = () => {
    setIsShowChapter(!isShowChapter);
  };

  useEffect(() => {
    setIsShowChapter(true);
  }, [chapterIndex]);

  return (
    <div className="info-page">
      <div className="container">
        <PageTitle text="Інформація для наших покупців" />

        <ul className="info-list">
          {infoPageData.map(({ id, chapterTitle, chapterText }) => (
            <li key={id}>
              <div
                onClick={() => {
                  setChapterIndex(id);
                  mouseClickHandler();
                }}
              >
                <PageSubtitle text={chapterTitle} />
              </div>
              <AnimatePresence>
                {chapterIndex === id && isShowChapter && (
                  <ul onClick={mouseClickHandler} className="chapter-list">
                    {chapterText.map((item, index) => (
                      <motion.li
                        key={index}
                        className="chapter-item"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InfoPage;
