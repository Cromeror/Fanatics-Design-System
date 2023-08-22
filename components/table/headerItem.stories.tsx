import type { Meta, StoryObj } from "@storybook/react";
import { TableExample } from "./TableExample";

const meta = {
  title: "Atoms/Table",
  component: TableExample,
  tags: ["autodocs"]
} satisfies Meta<typeof TableExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const columnExample = {

};

const defaultColumns: ColumnsType<DataType> = [
  {
    title: 'Table header1',
    dataIndex: 'tableHeader1',
    key: 'tableHeader1',
  }
];

export const Default: Story = {
  args: {
    columns: defaultColumns
  },
};

