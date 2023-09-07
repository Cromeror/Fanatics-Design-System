import React from "react";
import {Meta} from "@storybook/react";
import {RowItem} from "./RowItem";
import {Tag, Input} from "antd";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {StoryObj} from "@storybook/react";
import Button from "../button";

const meta: Meta = {
  title: "Atoms/RowItem",
  component: RowItem,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content to display inside the row item",
    },
  },
} as Meta<typeof RowItem>;
export default meta;

type Story = StoryObj<typeof RowItem>;

export const Text: Story = {
  args: {
    children: "Default Row Content",
  },
};

export const Tags: Story = {
  args: {
    children: <Tag color="magenta">magenta</Tag>
  },
};

export const Actions: Story = {
  args: {
    children: (
      <>
        <Button type={"link"} size={"small"} icon={true}>
          <EditOutlined/>
        </Button>
        <Button type={"link"} size={"small"} icon={true}>
          <DeleteOutlined/>
        </Button>
      </>
    ),
  },
};

export const Inputs: Story = {
  args: {
    children: <Input placeholder="Input"/>,
  },
};
