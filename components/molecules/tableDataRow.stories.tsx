import React from "react";
import {Meta} from "@storybook/react";
import {TableDataRow} from "./TableDataRow";
import {StoryObj} from "@storybook/react";
import {RowItem} from "../atoms/rowItem/RowItem";

const meta: Meta = {
  title: "Molecules/TableDataRow",
  component: TableDataRow,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content to display inside the row item",
    },
    selected: {
      control: {
        type: "boolean",
      },
      table: {defaultValue: {summary: false}},
      description: "Selected state for row",
    },
  },
} as Meta<typeof TableDataRow>;
export default meta;

type Story = StoryObj<typeof TableDataRow>;

export const Default: Story = {
  args: {
    children: (
      <>
        <RowItem>Table cell text</RowItem>
        <RowItem>Table cell text</RowItem>
        <RowItem>Table cell text</RowItem>
        <RowItem>Table cell text</RowItem>
      </>
    ),
  },
};

export const Selected: Story = {
  args: {
    children: (
      <>
        <RowItem>Table cell text</RowItem>
        <RowItem>Table cell text</RowItem>
        <RowItem>Table cell text</RowItem>
        <RowItem>Table cell text</RowItem>
      </>
    ),
    selected: true
  },
};
