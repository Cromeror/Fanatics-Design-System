import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["primary", "secondary", "text", "link"],
      control: {
        type: "select",
      },
      table: {defaultValue: {summary: "primary"}},
      description: "Style of button",
    },
    disabled: {
      description: "Disabled state of button",
      table: {defaultValue: {summary: false}},
    },
    href: {
      description: "Redirect url of link button",
      table: {defaultValue: {summary: ""}},
    },
    size: {
      options: ["small", "default", "large"],
      control: {
        type: "select",
      },
      description: "Set the size of the button",
      table: {defaultValue: {summary: "default"}},
    },
    children: {
      description: "`React.ReactNode | undefined`",
      table: {defaultValue: {summary: "undefined"}},
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "Button",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    type: "link",
    children: "Button",
  },
};
