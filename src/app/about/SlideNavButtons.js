// SlideNavButtons.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SlideNavButtons = ({ swiperRef }) => {
  const handleNext = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div>
      <button className="btnabout" name="prev" onClick={handlePrev}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ height: "13px", width: "13px" }}
        />
      </button>
      <button className="btnabout2" name="next" onClick={handleNext}>
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ height: "13px", width: "13px" }}
        />
      </button>
    </div>
  );
};

export default SlideNavButtons;
