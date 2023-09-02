import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FilterMenu } from "./FilterMenu";

const meta = {
  title: "Atoms/FilterMenu",
  component: FilterMenu,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: null,
      },
      table: { defaultValue: { summary: "undefined" } },
      description: "`React.ReactNode | undefined`",
    },
    options: {
      table: { defaultValue: { summary: "[]" } },
      description: "Option of the filter",
    },
  },
} satisfies Meta<typeof FilterMenu>;

export default meta;
const Template = (args) => <FilterMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <p>Click me!</p>,
  options: [
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
};
