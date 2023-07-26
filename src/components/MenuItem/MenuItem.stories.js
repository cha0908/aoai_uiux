import { MenuItem } from ".";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    menuType: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: true,
    text1: "Menu Item",
    iconLeft: true,
    iconRight: true,
    badge: true,
    vertical: true,
    menuType: "vertical",
    active: true,
    className: {},
    iconJamIconsIconJamIcons:
      "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon---jam-icons---outline---logos---home-3.svg",
  },
};
