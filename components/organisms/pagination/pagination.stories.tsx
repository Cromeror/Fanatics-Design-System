import React from "react";
import type { Meta } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta = {
  title: "organisms/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    numbers: {
      table: { defaultValue: { summary: "[]" } },
      description: "Numbers to show",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  numbers: [1, 2, 3, 4, 5, 6],
};
