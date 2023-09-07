import type {Meta, StoryObj} from "@storybook/react";
import {DropdownButton} from "./DropdownButton";

const meta = {
  title: "Atoms/DropdownButton",
  component: DropdownButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["basicInline", "twoFold", "basic"],
      control: {
        type: "select",
      },
      table: {defaultValue: {summary: "basicInline"}},
      description: "Style of dropdown button",
    },
    disabled: {
      description: "Disabled state of dropdown button",
      table: {defaultValue: {summary: false}},
    },
    size: {
      options: ["small", "default"],
      control: {
        type: "select",
      },
      description: "Set the size of the dropdown button",
      table: {defaultValue: {summary: "default"}},
    },
    fill: {
      options: ["outline", "filled"],
      control: {
        type: "select",
      },
      description: "Applies only for basic dropdown",
      table: {defaultValue: {summary: "outline"}},
    },
    children: {
      description: "`React.ReactNode | undefined`",
      table: {defaultValue: {summary: "undefined"}},
    },
  },
} satisfies Meta<typeof DropdownButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInline: Story = {
  args: {
    type: "basicInline",
    children: "Dropdown Button",
  },
};

export const TwoFoldDefault: Story = {
  args: {
    type: "twoFold",
    children: "Dropdown Button",
  },
};

export const TwoFoldSmall: Story = {
  args: {
    type: "twoFold",
    children: "Dropdown Button",
    size: 'small'
  },
};

export const BasicOutlineDefault: Story = {
  args: {
    type: "basic",
    children: "Dropdown Button",
    fill: 'outline'
  },
};

export const BasicFilledDefault: Story = {
  args: {
    type: "basic",
    children: "Dropdown Button",
    fill: 'filled'
  },
};

export const BasicOutlineSmall: Story = {
  args: {
    type: "basic",
    children: "Dropdown Button",
    fill: 'outline',
    size: 'small'
  },
};

export const BasicFilledSmall: Story = {
  args: {
    type: "basic",
    children: "Dropdown Button",
    fill: 'filled',
    size: 'small'
  },
};
