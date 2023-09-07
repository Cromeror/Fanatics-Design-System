import React from "react";
import type {Meta} from "@storybook/react";
import {FilterMenu} from "./FilterMenu";
import Button from "../button";

const meta = {
  title: "Atoms/FilterMenu",
  component: FilterMenu,
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    options: {
      table: {defaultValue: {summary: "[]"}},
      description: "Option of the filter",
    },
  },
} as Meta<typeof FilterMenu>;

export default meta;
const Template = (args) => <FilterMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <Button type={"primary"}>
      Click to open menu
    </Button>
  ),
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
