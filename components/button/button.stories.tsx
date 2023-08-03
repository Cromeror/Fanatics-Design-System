import { DeleteOutlined } from "@ant-design/icons";
import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonType } from ".";
import Button from ".";

const ButtonTypes: Array<ButtonType | undefined> = [
  "link",
  "text",
  "ghost",
  "default",
  "primary",
  "dashed",
  undefined,
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
      table: { defaultValue: { summary: "middle" } },
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
    size: "middle",
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
