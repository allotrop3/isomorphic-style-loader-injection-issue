import useStyles from "isomorphic-style-loader/useStyles";
import React from "react";
import App from "./App";
import styles from "./OverrideAppBackgroundColor.scss";

const OverrideAppBackgroundColor = () => {
  useStyles(styles);
  return (
    <App className={styles.app}>The background color should green.</App>
  );
};

export default OverrideAppBackgroundColor;
