/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Badge } from "../Badge";
import { IconJamIcons } from "../IconJamIcons";
import { IconJamIconsOutlineLogosChevronDown } from "../IconJamIconsOutlineLogosChevronDown";
import "./style.css";

interface Props {
  text: boolean;
  text1: string;
  iconLeft: boolean;
  iconRight: boolean;
  badge: boolean;
  vertical: boolean;
  menuType: "vertical" | "horizontal";
  active: boolean;
  className: any;
  iconJamIconsIconJamIcons: string;
  override: JSX.Element;
}

export const MenuItem = ({
  text = true,
  text1 = "Menu Item",
  iconLeft = true,
  iconRight = true,
  badge = true,
  vertical,
  menuType,
  active,
  className,
  iconJamIconsIconJamIcons = "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---home-3.svg",
  override = <IconJamIcons className="icon-jam-icons-instance" iconJamIcons={iconJamIconsIconJamIcons} />,
}: Props): JSX.Element => {
  return (
    <div className={`menu-item ${menuType} active-${active} vertical-${vertical} ${className}`}>
      {vertical && (
        <>
          <IconJamIcons
            className="icon-jam-icons-instance"
            iconJamIcons="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---home-6.svg"
          />
          <div className="div">Menu Item</div>
        </>
      )}

      {!vertical && (
        <>
          <>{iconLeft && <>{override}</>}</>
          <>{text && <div className="text-wrapper-2">{text1}</div>}</>
          <>
            {badge && (
              <Badge className="badge-instance" dot={false} for1="notifications" removeButton={false} size="XXS" />
            )}
          </>
          <>
            {iconRight && (
              <IconJamIconsOutlineLogosChevronDown
                className="icon-jam-icons-instance"
                iconJamIcons={
                  menuType === "vertical"
                    ? "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---chevron-down-2.svg"
                    : "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---chevron-down-4.svg"
                }
              />
            )}
          </>
        </>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  text: PropTypes.bool,
  text1: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  badge: PropTypes.bool,
  vertical: PropTypes.bool,
  menuType: PropTypes.oneOf(["vertical", "horizontal"]),
  active: PropTypes.bool,
  iconJamIconsIconJamIcons: PropTypes.string,
};
