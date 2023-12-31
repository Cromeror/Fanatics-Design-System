import React from "react";
import {Meta} from "@storybook/react";
import {TableDataRow} from "./TableDataRow";
import {StoryObj} from "@storybook/react";
import {RowItem} from "../atoms/rowItem/RowItem";
import Button from "../atoms/button";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const meta: Meta = {
  title: "Molecules/TableDataRow",
  component: TableDataRow,
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: {
        disable: true
      }
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
        <RowItem>
          <Button type={"link"} size={"small"} icon={true}>
            <EditOutlined/>
          </Button>
          <Button type={"link"} size={"small"} icon={true}>
            <DeleteOutlined/>
          </Button>
        </RowItem>
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
        <RowItem>
          <Button type={"link"} size={"small"} icon={true}>
            <EditOutlined/>
          </Button>
          <Button type={"link"} size={"small"} icon={true}>
            <DeleteOutlined/>
          </Button>
        </RowItem>
      </>
    ),
    selected: true
  },
};
