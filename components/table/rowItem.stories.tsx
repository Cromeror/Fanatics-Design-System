import React from "react";
import { Meta } from "@storybook/react";
import { RowItem } from "./RowItem";
import { Tag, Input, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

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
} satisfies Meta<typeof RowItem>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Row Content",
  },
};

export const WithAntDTag: Story = {
  args: {
    children: (
      <Space>
        <Tag color="blue">Tag 1</Tag>
        <Tag color="green">Tag 2</Tag>
      </Space>
    ),
  },
};

export const WithAntDIcons: Story = {
  args: {
    children: (
      <Space>
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    ),
  },
};

export const WithAntDInput: Story = {
  args: {
    children: <Input placeholder="Enter something" />,
  },
};

export const WithAllAntDComponents: Story = {
  args: {
    children: (
      <Space>
        <Tag color="purple">Tag 1</Tag>
        <EditOutlined />
        <Input placeholder="Enter something" />
      </Space>
    ),
  },
};