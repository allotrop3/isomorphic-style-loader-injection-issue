import ReactDOM from "@hot-loader/react-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import React from "react";
import OverrideAppBackgroundColor from "./OverrideAppBackgroundColor";

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => {
    removeCss.forEach(dispose => dispose());
  }
};

const StyledOverrideAppBackgroundColor = () => (
  <StyleContext.Provider value={{ insertCss }}>
    <OverrideAppBackgroundColor />
  </StyleContext.Provider>
);

const $app = document.createElement("div");
const app = 'app';
$app.setAttribute('id', app);
document.querySelector("body").appendChild($app);
console.log(document.getElementById(app));
ReactDOM.render(<StyledOverrideAppBackgroundColor />, document.getElementById(app));
