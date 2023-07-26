/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  iconTablerIcons: string;
}

export const IconTablerIcons = ({
  className,
  iconTablerIcons = "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---tabler-icons---folders-1.svg",
}: Props): JSX.Element => {
  return <img className={`icon-tabler-icons ${className}`} alt="Icon tabler icons" src={iconTablerIcons} />;
};

IconTablerIcons.propTypes = {
  iconTablerIcons: PropTypes.string,
};
