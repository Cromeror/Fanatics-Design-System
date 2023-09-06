import type {Meta, StoryObj} from "@storybook/react";
import {Control} from "./Control";

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
      table: {defaultValue: {summary: "radio"}},
      description: "Style of Control",
    },
  },
} as Meta<typeof Control>;

export default meta;

type Story = StoryObj<typeof Control>;

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

export const Expanded: Story = {
  args: {
    type: "expand",
    checked: false
  },
};

export const Collapse: Story = {
  args: {
    type: "collapse",
    checked: false
  },
};
