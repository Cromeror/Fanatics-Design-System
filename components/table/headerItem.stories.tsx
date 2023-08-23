import type {Meta, StoryObj} from "@storybook/react";
import {HeaderItem} from "./HeaderItem";

const meta = {
  title: "Atoms/HeaderItem",
  component: HeaderItem,
  tags: ["autodocs"],
  argTypes: {
    search: {
      control: "boolean",
      description: "Show search",
      table: {defaultValue: {summary: false}}
    },
    filters: {
      control: "boolean",
      description: "Show filters",
      table: {defaultValue: {summary: false}}
    },
    sorter: {
      control: "boolean",
      description: "Show sorter",
      table: {defaultValue: {summary: false}}
    },
  }
} satisfies Meta<typeof HeaderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Table header",
    sorter: () => false
  },
};

export const ShowSearch: Story = {
  args: {
    title: "Table header",
    search: true
  },
};

export const ShowFilters: Story = {
  args: {
    title: "Table header",
    filters: true
  },
};
