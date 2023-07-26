/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  size: "XS" | "XXS" | "s";
  dot: boolean;
  removeButton: boolean;
  for1: "notifications" | "default";
  className: any;
}

export const Badge = ({ size, dot, removeButton, for1, className }: Props): JSX.Element => {
  return (
    <div className={`badge ${size} ${for1} remove-button-${removeButton} dot-${dot} ${className}`}>
      {dot && (
        <div className="badge-dot">
          <div className="dot" />
        </div>
      )}

      <div className="text-2">
        {for1 === "default" && <>Badge</>}

        {for1 === "notifications" && <>99+</>}
      </div>
      {removeButton && (
        <img
          className="img"
          alt="Icon jam icons"
          src={
            size === "s"
              ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---close-1.svg"
              : size === "XS"
              ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---close.svg"
              : undefined
          }
        />
      )}
    </div>
  );
};

Badge.propTypes = {
  size: PropTypes.oneOf(["XS", "XXS", "s"]),
  dot: PropTypes.bool,
  removeButton: PropTypes.bool,
  for1: PropTypes.oneOf(["notifications", "default"]),
};
