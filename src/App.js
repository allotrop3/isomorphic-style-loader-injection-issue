import useStyles from "isomorphic-style-loader/useStyles";
import React from "react";
import styles from "./App.scss";

const App = ({ className, ...props }) => {
  useStyles(styles);
  return <div {...props} className={[styles.app, className].join(" ")} />;
};

export default App;
