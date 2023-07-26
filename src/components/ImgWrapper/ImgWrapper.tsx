/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const ImgWrapper = ({ className }: Props): JSX.Element => {
  return (
    <img
      className={`img-wrapper ${className}`}
      alt="Icon ionicons"
      src="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---ionicons---outline---exit-outline-1.svg"
    />
  );
};
