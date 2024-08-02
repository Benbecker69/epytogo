import React, { useState } from "react";
import styles from "./Carrousel.module.css";
import { ReactComponent as ArrowLeft } from "../../assets/images/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/svg/arrow-right.svg";

const Carrousel = (props) => {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevious = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  if (!images || images.length === 0) {
    return <p>Aucune image trouvée</p>;
  }

  return (
    <div className={styles.root}>
      <img className={styles.slide} src={images[currentImage]} alt="carousel" />
      {images && images.length > 1 && (
        <>
          <p>{`${currentImage + 1}/${images.length}`}</p>
          <button
            className={`${styles.arrow} ${styles.prev}`}
            onClick={goToPrevious}
          >
            <ArrowLeft alt={`previous`} />
          </button>
          <button
            className={`${styles.arrow} ${styles.next}`}
            onClick={goToNext}
          >
            <ArrowRight alt={`next`} />
          </button>
        </>
      )}
    </div>
  );
};

export default Carrousel;
