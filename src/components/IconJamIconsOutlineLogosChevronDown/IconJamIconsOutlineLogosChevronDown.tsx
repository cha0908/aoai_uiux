/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  iconJamIcons: string;
}

export const IconJamIconsOutlineLogosChevronDown = ({
  className,
  iconJamIcons = "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---chevron-down.svg",
}: Props): JSX.Element => {
  return (
    <img className={`icon-jam-icons-outline-logos-chevron-down ${className}`} alt="Icon jam icons" src={iconJamIcons} />
  );
};

IconJamIconsOutlineLogosChevronDown.propTypes = {
  iconJamIcons: PropTypes.string,
};
