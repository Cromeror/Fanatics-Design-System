import type { Meta, StoryObj } from "@storybook/react";
import { HeaderControl } from "./HeaderControl";

const meta = {
  title: "Atoms/HeaderControl",
  component: HeaderControl,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: [
        "checkbox",
        "dropdown",
        "empty",
        "radio",
        "indeterminate",
        "expand",
        "collapse",
      ],
      control: {
        type: "select",
      },
      table: { defaultValue: { summary: "radio" } },
      description: "Style of HeaderControl",
    },
  },
} satisfies Meta<typeof HeaderControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    type: "checkbox",
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
  },
};

export const Empty: Story = {
  args: {
    type: "empty",
  },
};

export const Dropdown: Story = {
  args: {
    type: "dropdown",
  },
};
