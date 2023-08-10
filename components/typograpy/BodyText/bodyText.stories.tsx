import type { Meta, StoryObj } from "@storybook/react";
import { BodyText } from './bodyText'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Typography body text",
  component: BodyText,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof BodyText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


// Base
export const Base: Story = {
  args: {
    children: "Table cell text",
    size: "base",
    lineHeight: "base"
  },
};

export const BaseStrong: Story = {
  args: {
    strong: true,
    size: "base",
    lineHeight: "base",
    children: "Table cell text",
  },
};

export const BaseUnderline: Story = {
  args: {
    underline: true,
    size: "base",
    lineHeight: "base",
    children: "Table cell text"
  },
};

export const BaseDelete: Story = {
  args: {
    delete: true,
    size: "base",
    lineHeight: "base",
    children: "Table cell text"
  },
};

export const BaseItalic: Story = {
  args: {
    italic: true,
    size: "base",
    lineHeight: "base",
    children: "Table cell text"
  },
};

// ExtraSmall
export const ExtraSmallBase: Story = {
  args: {
    size: "extra-small",
    lineHeight: "extra-small",
    children: "Table cell text",
  },
};

export const ExtraSmallStrong: Story = {
  args: {
    strong: true,
    size: "extra-small",
    lineHeight: "extra-small",
    children: "Table cell text",
  },
};

export const ExtraSmallUnderline: Story = {
  args: {
    underline: true,
    size: "extra-small",
    lineHeight: "extra-small",
    children: "Table cell text"
  },
};

export const ExtraSmallDelete: Story = {
  args: {
    delete: true,
    size: "extra-small",
    lineHeight: "extra-small",
    children: "Table cell text"
  },
};

export const ExtraSmallItalic: Story = {
  args: {
    italic: true,
    size: "extra-small",
    lineHeight: "extra-small",
    children: "Table cell text"
  },
};

// Small

export const SmallBase: Story = {
  args: {
    size: "small",
    lineHeight: "small",
    children: "Table cell text",
  },
};

export const SmallStrong: Story = {
  args: {
    strong: true,
    size: "small",
    lineHeight: "small",
    children: "Table cell text",
  },
};

export const SmallUnderline: Story = {
  args: {
    underline: true,
    size: "small",
    lineHeight: "small",
    children: "Table cell text"
  },
};

export const SmallDelete: Story = {
  args: {
    delete: true,
    size: "small",
    lineHeight: "small",
    children: "Table cell text"
  },
};

export const SmallItalic: Story = {
  args: {
    italic: true,
    size: "small",
    lineHeight: "small",
    children: "Table cell text"
  },
};

// Large

export const LargeBase: Story = {
  args: {
    children: "Table cell text",
    size: "large",
    lineHeight: "large",
  },
};

export const LargeStrong: Story = {
  args: {
    strong: true,
    size: "large",
    lineHeight: "large",
    children: "Table cell text",
  },
};

export const LargeUnderline: Story = {
  args: {
    underline: true,
    size: "large",
    lineHeight: "large",
    children: "Table cell text",
  },
};

export const LargeDelete: Story = {
  args: {
    delete: true,
    size: "large",
    lineHeight: "large",
    children: "Table cell text",
  },
};

export const LargeItalic: Story = {
  args: {
    italic: true,
    size: "large",
    lineHeight: "large",
    children: "Table cell text",
  },
};


// ExtraLarge

export const ExtraLargeBase: Story = {
  args: {
    size: "extra-large",
    lineHeight: "extra-large",
    children: "Table cell text",
  },
};

export const ExtraLargeStrong: Story = {
  args: {
    strong: true,
    size: "extra-large",
    lineHeight: "extra-large",
    children: "Table cell text",
  },
};

export const ExtraLargeUnderline: Story = {
  args: {
    underline: true,
    size: "extra-large",
    lineHeight: "extra-large",
    children: "Table cell text",
  },
};

export const ExtraLargeDelete: Story = {
  args: {
    delete: true,
    size: "extra-large",
    lineHeight: "extra-large",
    children: "Table cell text",
  },
};

export const ExtraLargeItalic: Story = {
  args: {
    italic: true,
    size: "extra-large",
    lineHeight: "extra-large",
    children: "Table cell text",
  },
};
