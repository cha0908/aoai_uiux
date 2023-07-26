/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconJamIcons } from "../IconJamIcons";
import { IconJamIconsOutlineLogosPictures } from "../IconJamIconsOutlineLogosPictures";
import { IconJamIconsOutlineLogosPlane } from "../IconJamIconsOutlineLogosPlane";
import { IconJamIconsOutlineLogosUsers } from "../IconJamIconsOutlineLogosUsers";
import { IconJamIconsWrapper } from "../IconJamIconsWrapper";
import { IconTablerIcons } from "../IconTablerIcons";
import { Logo } from "../Logo";
import { MenuItem } from "../MenuItem";
import "./style.css";

interface Props {
  className: any;
  logoText: string;
  menuItemIconJamIconsIconJamIcons: string;
  menuItem: JSX.Element;
  override: JSX.Element;
  menuItem1: JSX.Element;
  menuItem2: JSX.Element;
  menuItem3: JSX.Element;
}

export const DesktopVerticalNot = ({
  className,
  logoText = "By",
  menuItemIconJamIconsIconJamIcons,
  menuItem = (
    <IconTablerIcons
      className="design-component-instance-node"
      iconTablerIcons="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---tabler-icons---folders-2.svg"
    />
  ),
  override = (
    <IconJamIconsWrapper
      className="design-component-instance-node"
      iconJamIcons="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---tags-2.svg"
    />
  ),
  menuItem1 = <IconJamIconsOutlineLogosUsers className="design-component-instance-node" />,
  menuItem2 = <IconJamIconsOutlineLogosPictures className="design-component-instance-node" />,
  menuItem3 = (
    <IconJamIconsOutlineLogosPlane
      className="design-component-instance-node"
      iconJamIcons="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---plane-2.svg"
    />
  ),
}: Props): JSX.Element => {
  return (
    <div className={`desktop-vertical-not ${className}`}>
      <div className="logo-container">
        <Logo
          className="logo-instance"
          iconContainer="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon-container-1.svg"
          name="header-logo"
          text="ChatGPT"
          text1={logoText}
        />
      </div>
      <div className="menu">
        <MenuItem
          active
          badge={false}
          className="menu-item-instance"
          iconJamIconsIconJamIcons={menuItemIconJamIconsIconJamIcons}
          iconRight={false}
          menuType="vertical"
          override={
            <IconJamIcons
              className="design-component-instance-node"
              iconJamIcons="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---home-7.svg"
            />
          }
          text1="Lorem"
          vertical={false}
        />
        <MenuItem
          active={false}
          badge={false}
          className="menu-item-2"
          iconRight={false}
          menuType="vertical"
          override={menuItem}
          text1="Lorem"
          vertical={false}
        />
        <MenuItem
          active={false}
          badge={false}
          className="menu-item-2"
          iconRight={false}
          menuType="vertical"
          override={override}
          text1="Lorem"
          vertical={false}
        />
        <MenuItem
          active={false}
          badge={false}
          className="menu-item-2"
          iconRight={false}
          menuType="vertical"
          override={menuItem1}
          text1="Lorem"
          vertical={false}
        />
        <MenuItem
          active={false}
          badge={false}
          className="menu-item-2"
          iconRight={false}
          menuType="vertical"
          override={menuItem2}
          text1="Lorem"
          vertical={false}
        />
        <MenuItem
          active={false}
          badge={false}
          className="menu-item-2"
          iconRight={false}
          menuType="vertical"
          override={menuItem3}
          text1="Lorem"
          vertical={false}
        />
      </div>
    </div>
  );
};

DesktopVerticalNot.propTypes = {
  logoText: PropTypes.string,
  menuItemIconJamIconsIconJamIcons: PropTypes.string,
};
