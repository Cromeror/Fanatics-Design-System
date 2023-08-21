import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["primary", "secondary", "text", "link", "textDark"],
      control: {
        type: "select",
      },
      table: {defaultValue: {summary: "primary"}},
      description: "Style of button",
    },
    disabled: {
      description: "Disabled state of button",
      table: {defaultValue: {summary: false}},
    },
    size: {
      options: ["small", "default", "large"],
      control: {
        type: "select",
      },
      description: "Set the size of the button",
      table: {defaultValue: {summary: "default"}},
    },
    children: {
      description: "`React.ReactNode | undefined`",
      table: {defaultValue: {summary: "undefined"}},
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
  args: {
    type: "primary",
    children: "Button",
    size: "small",
  },
};
export const PrimaryDefault: Story = {
  args: {
    type: "primary",
    children: "Button",
  },
};
export const PrimaryLarge: Story = {
  args: {
    type: "primary",
    children: "Button",
    size: "large",
  },
};

export const PrimarySmallDanger: Story = {
  args: {
    type: "primary",
    children: "Button",
    size: "small",
    danger: true,
  },
};
export const PrimaryDefaultDanger: Story = {
  args: {
    type: "primary",
    children: "Button",
    danger: true,
  },
};
export const PrimaryLargeDanger: Story = {
  args: {
    type: "primary",
    children: "Button",
    size: "large",
    danger: true,
  },
};

export const SecondarySmall: Story = {
  args: {
    type: "secondary",
    children: "Button",
    size: "small",
  },
};
export const SecondaryDefault: Story = {
  args: {
    type: "secondary",
    children: "Button",
  },
};
export const SecondaryLarge: Story = {
  args: {
    type: "secondary",
    children: "Button",
    size: "large",
  },
};
export const SecondarySmallDanger: Story = {
  args: {
    type: "secondary",
    children: "Button",
    size: "small",
    danger: true,
  },
};
export const SecondaryDefaultDanger: Story = {
  args: {
    type: "secondary",
    children: "Button",
    danger: true
  },
};
export const SecondaryLargeLarge: Story = {
  args: {
    type: "secondary",
    children: "Button",
    size: "large",
    danger: true,
  },
};

export const TextSmall: Story = {
  args: {
    type: "text",
    children: "Button",
    size: "small",
  },
};
export const TextDefault: Story = {
  args: {
    type: "text",
    children: "Button",

  },
};

export const TextLarge: Story = {
  args: {
    type: "text",
    children: "Button",
    size: "large",

  },
};

export const TextSmallDanger: Story = {
  args: {
    type: "text",
    children: "Button",
    size: "small",
    danger:true

  },
};

export const TextDefaultDanger: Story = {
  args: {
    type: "text",
    children: "Button",
   danger: true,
  },
};

export const TextLargeDanger: Story = {
  args: {
    type: "text",
    children: "Button",
    size: "large",
    danger: true,
  },
};


export const LinkSmall: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "small",
  },
};

export const LinkDefault: Story = {
  args: {
    type: "link",
    children: "Button",
  },
};
export const LinkLarge: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "large",
  },
};

export const LinkSmallDanger: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "small",
    danger: true,
  },
};
export const LinkDefaultDanger: Story = {
  args: {
    type: "link",
    children: "Button",
    danger: true,
  },
};
export const LinkLargeDanger: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "large",
    danger: true,
  },
};

export const TextDarkSmall: Story = {
  args: {
    type: "textDark",
    children: "Button",
    size: "small",
  },
};
export const TextDarkDefault: Story = {
  args: {
    type: "textDark",
    children: "Button",

  },
};
export const TextDarkLarge: Story = {
  args: {
    type: "textDark",
    children: "Button",
    size: "large",

  },
};


