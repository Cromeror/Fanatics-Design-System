import type { Meta, StoryObj } from "@storybook/react";
import { Logotype } from "./Logotype";

const meta = {
  title: "Logotype",
  component: Logotype,
  tags: ["autodocs"]
} satisfies Meta<typeof Logotype>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "primary"
  },
};

export const Reversed: Story = {
  args: {
    type: "reversed"
  },
};
