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
    type: {
      control: {type: 'select'},
      options: ['default', 'bulk', 'select'],
      table: {defaultValue: {summary: "default"}}
    },
  }
} as Meta<typeof HeaderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Table header",
    type: "default"
  },
};

export const BulkInput: Story = {
  args: {
    title: "Table header",
    type: "bulk"
  },
};

export const BulkSelect: Story = {
  args: {
    title: "Table header",
    sorter: () => false,
    filters: true,
    search: true,
    type: "select",
    bulkSelectOptions: [
      {value: 'Option 1', label: 'Option 1'},
      {value: 'Option 2', label: 'Option 2'}
    ]
  },
};

export const Filter: Story = {
  args: {
    title: "Table header",
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
};

export const Search: Story = {
  args: {
    title: "Table header",
    search: true
  },
};

export const Sorter: Story = {
  args: {
    title: "Table header",
    sorter: () => false
  },
};


export const SorterFilterAndSearch: Story = {
  args: {
    title: "Table header",
    sorter: () => false,
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
};
