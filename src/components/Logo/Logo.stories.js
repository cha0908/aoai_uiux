import { Logo } from ".";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    name: {
      options: ["footer-logo", "zoomerr", "waves", "art-venue", "header-logo", "kontrastr", "smart-finder", "shell"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    name: "footer-logo",
    className: {},
    iconContainer:
      "https://generation-sessions.s3.amazonaws.com/f33d24b8b89d2591f5efd6c69f896f7b/img/icon-container-3.svg",
    text: "WebbyFrames",
    text1: "for Figma",
  },
};
