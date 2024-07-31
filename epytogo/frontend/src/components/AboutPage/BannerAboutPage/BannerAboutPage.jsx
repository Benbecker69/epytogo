import React from "react";
import styles from "./BannerAbout.module.css";
import bannerImg from "../../../assets/images/banner_about_image.PNG";

const BannerAbout = () => {
  return (
    <div className={styles.root}>
      <img src={bannerImg} alt="pyramid" />
    </div>
  );
};

export default BannerAbout;