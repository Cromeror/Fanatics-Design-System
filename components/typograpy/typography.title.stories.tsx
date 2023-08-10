import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "antd";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Typography",
  component: Typography.Title,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Typography.Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Level1: Story = {
  args: {
    level: 1,
    children: 'Table cell text',
  },
};
export const Level2: Story = {
  args: {
    level: 2,
    children: 'Table cell text',
  },
};
export const Level3: Story = {
  args: {
    level: 3,
    children: 'Table cell text',
  },
};
export const Level4: Story = {
  args: {
    level: 4,
    children: 'Table cell text',
  },
};
export const Level5: Story = {
  args: {
    level: 5,
    children: 'Table cell text',
  },
};
