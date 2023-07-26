import { Badge } from ".";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    size: {
      options: ["XS", "XXS", "s"],
      control: { type: "select" },
    },
    for1: {
      options: ["notifications", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "XS",
    dot: true,
    removeButton: true,
    for1: "notifications",
    className: {},
  },
};
