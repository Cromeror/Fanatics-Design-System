import { DeleteOutlined } from "@ant-design/icons";
import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonType } from ".";
import { Button } from "./button";

const ButtonTypes: Array<ButtonType | undefined> = [
  "link",
  "text",
  "default",
  "primary",
];
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ButtonTypes,
      control: {
        type: "select",
      },
      table: { defaultValue: { summary: "default" } },
      description: "Style of button",
    },
    block: {
      description: "Option to fit button width to its parent width",
      table: { defaultValue: { summary: false } },
    },
    danger: {
      description: "Set the danger status of button",
      table: { defaultValue: { summary: false } },
    },
    disabled: {
      description: "Disabled state of button",
      table: { defaultValue: { summary: false } },
    },
    ghost: {
      description:
        "Make background transparent and invert text and border colors",
      table: { defaultValue: { summary: false } },
    },
    href: {
      description: "Redirect url of link button",
      table: { defaultValue: { summary: "" } },
    },
    htmlType: {
      description:
        "Set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)",
      table: { defaultValue: { summary: "button" } },
    },
    icon: {
      description: "Set the icon component of button",
      control: { type: "disabled" },
    },
    loading: {
      description: "Set the loading status of button",
      table: { defaultValue: { summary: false } },
    },
    shape: {
      description: "Set the button shape",
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      description: "Set the size of the button",
      table: { defaultValue: { summary: "default" } },
    },
    styles: {
      description: "Semantic DOM style",
      control: { type: "disabled" },
    },
    target: {
      description:
        "Same as target attribute of a, works when href is specified",
      control: { type: "disabled" },
    },
    onClick: {
      description: "Set the handler to handle `click` event",
      control: { type: "disabled" },
      table: { defaultValue: { summary: "(event: MouseEvent) => void" } },
    },
    children: {
      description: "`React.ReactNode | undefined`",
      table: { defaultValue: { summary: "undefined" } },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// Primary Default
export const ButtonPrimaryDefault: Story = {
  args: {
    type: "primary",
    size: "default",
    color: "primary-default",
    children: "Click Me",
  },
};

export const ButtonPrimaryLarge: Story = {
  args: {
    type: "primary",
    size: "large",
    color: "primary-default",
    children: "Click Me",
  },
};

export const ButtonPrimarySmall: Story = {
  args: {
    type: "primary",
    size: "small",
    color: "primary-default",
    children: "Click Me",
  },
};

//Secondary Default
export const ButtonSecondaryDefault: Story = {
  args: {
    type: "secondary",
    size: "default",
    children: "Click Me",
  },
};

export const ButtonSecondarylarge: Story = {
  args: {
    type: "secondary",
    size: "large",
    children: "Click Me",
  },
};
export const ButtonSecondarySmall: Story = {
  args: {
    type: "secondary",
    size: "small",
    children: "Click Me",
  },
};

//Text Default
export const ButtonTextDefault: Story = {
  args: {
    type: "text",
    size: "default",
    children: "Click Me",
  },
};

export const ButtonTextlarge: Story = {
  args: {
    type: "text",
    size: "large",
    children: "Click Me",
  },
};
export const ButtonTextSmall: Story = {
  args: {
    type: "text",
    size: "small",
    children: "Click Me",
  },
};

// Link
export const ButtonLinkDefault: Story = {
  args: {
    type: "link",
    size: "default",
    children: "Click Me",
  },
};

export const ButtonLinklarge: Story = {
  args: {
    type: "link",
    size: "large",
    children: "Click Me",
  },
};
export const ButtonLinkSmall: Story = {
  args: {
    type: "link",
    size: "small",
    children: "Click Me",
  },
};

//Text-dark
export const ButtonTextDarkDefault: Story = {
  args: {
    type: "text-dark",
    size: "default",
    color: "text-dark",
    children: "Click Me",

  },
};

export const ButtonTextDarklarge: Story = {
  args: {
    type: "text-dark",
    size: "large",
    color: "text-dark",
    children: "Click Me",
  },
};
export const ButtonTextDarkSmall: Story = {
  args: {
    type: "text-dark",
    size: "small",
    color: "text-dark",
    children: "Click Me",
  },
};


export const Type: Story = {
  args: {
    type: "primary",
    block: false,
    danger: false,
    disabled: false,
    ghost: false,
    href: "",
    htmlType: "button",
    icon: null,
    loading: false,
    shape: "default",
    size: "large",
    target: "",
    onClick: undefined,
    styles: undefined,
    children: "Click Me",
  },
};

export const Icon: Story = {
  args: {
    ...Type.args,
    danger: true,
    children: "Delete Item",
    icon: <DeleteOutlined />,
  },
};
