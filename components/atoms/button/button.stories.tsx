import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";
import {EditOutlined} from "@ant-design/icons";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["primary", "secondary", "text", "link", "tertiary"],
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
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

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
export const PrimaryDisabled: Story = {
  args: {
    type: "primary",
    children: "Button",
    disabled: true
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
export const PrimaryDangerDisabled: Story = {
  args: {
    type: "primary",
    children: "Button",
    danger: true,
    disabled: true
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
export const SecondaryDisabled: Story = {
  args: {
    type: "secondary",
    children: "Button",
    disabled: true
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
export const SecondaryLargeDisabled: Story = {
  args: {
    type: "secondary",
    children: "Button",
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
export const TextDisabled: Story = {
  args: {
    type: "text",
    children: "Button",
    disabled: true
  },
};

export const TextSmallDanger: Story = {
  args: {
    type: "text",
    children: "Button",
    size: "small",
    danger: true
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
export const TextDangerDisabled: Story = {
  args: {
    type: "text",
    children: "Button",
    danger: true,
    disabled: true
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
export const LinkDisabled: Story = {
  args: {
    type: "link",
    children: "Button",
    disabled: true
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
export const LinkDangerDisabled: Story = {
  args: {
    type: "link",
    children: "Button",
    disabled: true,
    danger: true,
  },
};

export const TertiarySmall: Story = {
  args: {
    type: "tertiary",
    children: "Button",
    size: "small",
  },
};
export const TertiaryDefault: Story = {
  args: {
    type: "tertiary",
    children: "Button",

  },
};
export const TertiaryLarge: Story = {
  args: {
    type: "tertiary",
    children: "Button",
    size: "large",
  },
};
export const TertiaryDisabled: Story = {
  args: {
    type: "tertiary",
    children: "Button",
    disabled: true
  },
};

export const IconButton: Story = {
  args: {
    children:  <EditOutlined/>,
    icon: true
  },
};

export const IconSecondaryButton: Story = {
  args: {
    children:  <EditOutlined/>,
    icon: true,
    type: "secondary"
  },
};

export const IconTextButton: Story = {
  args: {
    children:  <EditOutlined/>,
    icon: true,
    type: "text"
  },
};

export const IconLinkButton: Story = {
  args: {
    children:  <EditOutlined/>,
    icon: true,
    type: "link"
  },
};

export const IconTertiaryButton: Story = {
  args: {
    children:  <EditOutlined/>,
    icon: true,
    type: "tertiary"
  },
};
