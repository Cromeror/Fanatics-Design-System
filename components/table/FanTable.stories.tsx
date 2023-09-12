import type { Meta, StoryObj } from "@storybook/react";
import FanTable from "./FanTable";
import React from "react";
import { Input } from "antd";

const meta = {
  title: "Atoms/Table",
  component: FanTable,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FanTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FanTableInitialProps: Story = {
  args: {
    columns: [
      { title: "A", dataIndex: "key", width: 150 },
      { title: "B", dataIndex: "key" },
      { title: "C", dataIndex: "key" },
      { title: "D", dataIndex: "key" },
      { title: "E", dataIndex: "key", width: 200 },
      { title: "F", dataIndex: "key", width: 100 },
    ],
    dataSource: Array.from({ length: 5000 }, (_, key) => ({ key })),
    scroll: { y: 300, x: "100vw" },
  },
};

export const FiltersTable: Story = {
  args: {
    columns: [
      {
        title: "A",
        dataIndex: "key",
        onFilter: (value, record) => {
          return (
            record["key"].toString().toLowerCase() ===
            String(value).toLowerCase()
          );
        },
        width: 150,
        filterSearch: true,
        filterMultiple: true,
        filters: Array.from({ length: 500 }, (_, key) => ({ key })).map(
          ({ key }) => ({ text: key, value: key })
        ),
      },
      { title: "B", dataIndex: "key" },
      { title: "C", dataIndex: "key" },
      { title: "D", dataIndex: "key" },
      { title: "E", dataIndex: "key", width: 200 },
      { title: "F", dataIndex: "key", width: 100 },
    ],
    dataSource: Array.from({ length: 500 }, (_, key) => ({ key })),
    // scroll: { y: 300, x: '100vw' }
  },
};

const EditableCell = ({
  title,
  editable,
  ...rest
}) => {
  if(!editable) return <td>{title}</td>
  return (
    <td>
      <Input placeholder={title} />
    </td>
  );
};

export const EditableHeaderTable: Story = {
  args: {
    columns: [
      {
        title: "A",
        dataIndex: "key",
        width: 150,
        onHeaderCell: (record) => ({
          record,
          title: "A",
          editable: false,
          dataIndex: "key1",
          handleSave: (row) => {
            console.log(row);
          },
        }),
      },
      {
        title: "B",
        width: 150,
        dataIndex: "key2",
        // onCell // for body
        onHeaderCell: (record) => ({
          record,
          title: "B",
          editable: true,
          dataIndex: "key2",
          handleSave: (row) => {
            console.log(row);
          },
        }),
      },
    ],
    dataSource: Array.from({ length: 10 }, (_, key) => ({
      key: key,
      key2: key + 10,
    })),
    components: {
      header: {
        cell: EditableCell
      },
    },
  },
};
