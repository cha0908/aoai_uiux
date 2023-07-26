import React from "react";
import { DesktopVerticalNot } from "../../components/DesktopVerticalNot";
import { IconIonicons } from "../../components/IconIonicons";
import { IconIoniconsSharp } from "../../components/IconIoniconsSharp";
import { IconIoniconsWrapper } from "../../components/IconIoniconsWrapper";
import { IconJamIconsOutlineLogosPictures } from "../../components/IconJamIconsOutlineLogosPictures";
import { IconJamIconsOutlineLogosPlane } from "../../components/IconJamIconsOutlineLogosPlane";
import { IconJamIconsOutlineLogosUsers } from "../../components/IconJamIconsOutlineLogosUsers";
import { IconJamIconsWrapper } from "../../components/IconJamIconsWrapper";
import { IconTablerIcons } from "../../components/IconTablerIcons";
import { ImgWrapper } from "../../components/ImgWrapper";
import "./style.css";

export const ElementChatgptLanding = (): JSX.Element => {
  return (
    <div className="element-chatgpt-landing">
      <div className="div-2">
        <div className="frame">
          <div className="frame-2">
            <div className="frame-3">
              <img
                className="rectangle-stroke"
                alt="Rectangle stroke"
                src="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/rectangle-14--stroke-.svg"
              />
              <div className="frame-4">
                <div className="text-wrapper-3">ChatGPT</div>
                <div className="text-wrapper-4">Operated by PCCW Lenovo</div>
              </div>
            </div>
            <div className="text-wrapper-4">Powered by gpt-7.19-turbo</div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-5">
            <div className="frame-6">
              <IconIonicons className="design-component-instance-node-2" />
              <p className="p">
                Lorem ipsum dolor sit amet consectetur. Id volutpat magna elementum tincidunt nulla eu eleifend
                laoreet.Lore|
              </p>
            </div>
            <div className="frame-7">
              <IconIoniconsWrapper className="design-component-instance-node-2" />
              <IconIoniconsSharp className="design-component-instance-node-2" />
            </div>
          </div>
        </div>
        <div className="frame-8">
          <div className="button-wrapper">
            <div className="button">
              <div className="frame-9">
                <ImgWrapper className="icon-ionicons-outline-exit-outline" />
                <div className="text-wrapper-5">Share</div>
              </div>
            </div>
          </div>
          <div className="rectangle" />
        </div>
        <div className="frame-10">
          <div className="p-wrapper">
            <p className="text-wrapper-6">Lorem ipsum dolor sit amet consectetur. Id voluughv?</p>
          </div>
          <div className="frame-11">
            <p className="text-wrapper-6">Lorem ipsum dolor sit amet consectetur. Id volutpat magna elementum tiqih?</p>
          </div>
          <div className="frame-12">
            <p className="text-wrapper-6">
              Lorem ipsum dolor sit amet consectetur. Id volutpat magna elementum tincidunt nuoj?
            </p>
          </div>
        </div>
        <div className="group">
          <div className="overlap-group">
            <DesktopVerticalNot
              className="desktop-vertical-not-logged-buttons-bottom"
              logoText="By HKMA"
              menuItem={
                <IconTablerIcons
                  className="design-component-instance-node-2"
                  iconTablerIcons="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---tabler-icons---folders.svg"
                />
              }
              menuItem1={<IconJamIconsOutlineLogosUsers className="design-component-instance-node-2" />}
              menuItem2={<IconJamIconsOutlineLogosPictures className="design-component-instance-node-2" />}
              menuItem3={
                <IconJamIconsOutlineLogosPlane
                  className="design-component-instance-node-2"
                  iconJamIcons="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---plane.svg"
                />
              }
              menuItemIconJamIconsIconJamIcons="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---home-7.svg"
              override={
                <IconJamIconsWrapper
                  className="design-component-instance-node-2"
                  iconJamIcons="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---tags.svg"
                />
              }
            />
            <img
              className="image"
              alt="Image"
              src="https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/image-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
