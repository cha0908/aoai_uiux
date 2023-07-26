/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  name: "footer-logo" | "zoomerr" | "waves" | "art-venue" | "header-logo" | "kontrastr" | "smart-finder" | "shell";
  className: any;
  iconContainer: string;
  text: string;
  text1: string;
}

export const Logo = ({
  name,
  className,
  iconContainer = "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon-container-3.svg",
  text = "WebbyFrames",
  text1 = "for Figma",
}: Props): JSX.Element => {
  return (
    <div className={`logo ${name} ${className}`}>
      <img
        className="icon-container"
        alt="Icon container"
        src={
          name === "footer-logo"
            ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon-container-2.svg"
            : name === "waves"
            ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/vector-2.svg"
            : name === "art-venue"
            ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/group-46@2x.png"
            : name === "smart-finder"
            ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/group-45@2x.png"
            : name === "shell"
            ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/vector-1.svg"
            : name === "zoomerr"
            ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/vector.svg"
            : name === "kontrastr"
            ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/group-47@2x.png"
            : iconContainer
        }
      />
      <div className="text">
        {["footer-logo", "header-logo"].includes(name) && (
          <>
            <div className="webbyframes">{text}</div>
            <div className="for-figma">{text1}</div>
          </>
        )}

        {name === "waves" && (
          <>
            <span className="text-wrapper">WAVES</span>
            <span className="span">MARATHON</span>
          </>
        )}

        {name === "art-venue" && <>ArtVenue</>}

        {name === "smart-finder" && <>SmartFinder</>}

        {name === "shell" && <>SHELLS</>}

        {name === "zoomerr" && <>Zoomerr</>}

        {name === "kontrastr" && <>kontrastr</>}
      </div>
    </div>
  );
};

Logo.propTypes = {
  name: PropTypes.oneOf([
    "footer-logo",
    "zoomerr",
    "waves",
    "art-venue",
    "header-logo",
    "kontrastr",
    "smart-finder",
    "shell",
  ]),
  iconContainer: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
