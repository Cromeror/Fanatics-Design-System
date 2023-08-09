import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "antd";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Typography text",
  component: Typography.Text,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Typography.Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {
    children: 'Table cell text',
  },
};

export const Strong: Story = {
  args: {
    strong: true,
    children: 'Table cell text'
  },
};

export const Underline: Story = {
  args: {
    underline: true,
    children: 'Table cell text'
  },
};

export const Delete: Story = {
  args: {
    delete: true,
    children: 'Table cell text'
  },
};

export const Italic: Story = {
  args: {
    italic: true,
    children: 'Table cell text'
  },
};
