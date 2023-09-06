import type {StoryObj} from "@storybook/react";
import {Table} from "./Table";

const meta = {
  title: "Organisms/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: "object",
      description: "Data",
      table: {defaultValue: {summary: []}}
    },
    data: {
      control: "object",
      description: "Data",
      table: {defaultValue: {summary: []}}
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        onFilter: (value: string, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["descend"],
        search: true,
        filters: [
          {
            label: "John Brown",
            value: "John Brown",
          },
          {
            label: "Jim Green",
            value: "Jim Green",
          },
          {
            label: "Joe Black",
            value: "Joe Black",
          },
        ],
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        filters: [
          {
            label: "London",
            value: "London",
          },
          {
            label: "New York",
            value: "New York",
          },
          {
            label: "San Francisco",
            value: "San Francisco",
          },
        ],
        onFilter: (value: string, record) => record.address.indexOf(value) === 0,
      }
    ],
    data: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },],
  },
};
