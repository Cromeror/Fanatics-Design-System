import type { Meta, StoryObj } from "@storybook/react";
import { Control } from "./Control";

const meta = {
  title: "Atoms/Control",
  component: Control,
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
      description: "Style of Control",
    },
  },
} satisfies Meta<typeof Control>;

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
