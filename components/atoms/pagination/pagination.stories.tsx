import type {Meta, StoryObj} from "@storybook/react";
import {Pagination} from "./Pagination";

const meta = {
  title: "Atoms/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["number", "arrow", "end"],
      control: {
        type: "select",
      },
      table: {defaultValue: {summary: "number"}},
      description: "Style of pagination",
    },
    direction: {
      options: ["left", "right"],
      control: {
        type: "select",
      },
      table: {defaultValue: {summary: "left"}},
      description: "Direction of arrow",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      table: {defaultValue: {summary: false}},
      description: "Disabled state of pagination",
    },
    selected: {
      control: {
        type: "boolean",
      },
      table: {defaultValue: {summary: false}},
      description: "Selected state for number type",
    },
    value: {
      control: {
        type: "number",
      },
      description: "Value for type number",
    },
  },
} as Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Number: Story = {
  args: {
    type: "number",
    value: 1,
  },
};

export const NumberSelected: Story = {
  args: {
    type: "number",
    value: 1,
    selected: true,
  },
};

export const Arrow: Story = {
  args: {
    type: "arrow",
  },
};

export const ArrowSelected: Story = {
  args: {
    type: "arrow",
    direction: "right",
    selected: true,
  },
};

export const End: Story = {
  args: {
    type: "end",
  },
};

export const EndSelected: Story = {
  args: {
    type: "end",
    direction: "right",
    selected: true,
  },
};
