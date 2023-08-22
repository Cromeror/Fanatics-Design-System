import type { Meta, StoryObj } from "@storybook/react";
import { HeaderItem } from "./HeaderItem";

const meta = {
  title: "Atoms/HeaderItem",
  component: HeaderItem,
  tags: ["autodocs"]
} satisfies Meta<typeof HeaderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Table header",
    sorter: ()=>{}
  },
};
