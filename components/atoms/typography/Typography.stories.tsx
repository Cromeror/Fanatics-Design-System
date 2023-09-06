import type {Meta, StoryObj} from "@storybook/react";
import {BodyText} from './BodyText'
import {Heading} from "./Heading";
import {Title} from "./Title";

const meta = {
  title: "Atoms/Typography",
  component: BodyText,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: 'inline-radio',
      description: 'Select the component to use',
      options: ["Heading", "Title", "BodyText"],
    },
    text: {control: "text"},
    titleSize: {
      if: {arg: 'type', eq: 'Title'},
      name: "size",
      control: 'select',
      description: 'The size of the title.',
      options: ["large", "medium", "small"],
    },
    bodyTextSize: {
      if: {arg: 'type', eq: 'BodyText'},
      control: 'select',
      description: 'The size of the body.',
      options: ["extra-large", "large", "base", "small", "extra-small"],
    },
    size: {
      if: {arg: 'type', eq: 'Heading'},
      control: 'select',
      description: 'The size of the heading.',
      options: ["extra-large", "large", "medium", "small", "extra-small"],
    },
    strong: {
      if: {arg: 'type', eq: 'BodyText'},
      control: "boolean"
    },
    underline: {
      if: {arg: 'type', eq: 'BodyText'},
      control: "boolean"
    },
    italic: {
      if: {arg: 'type', eq: 'BodyText'},
      control: "boolean"
    },
    delete: {
      if: {arg: 'type', eq: 'BodyText'},
      control: "boolean"
    }
  },
} as Meta<typeof BodyText | Heading | Title>;

export default meta;
type Story = StoryObj<typeof BodyText | Heading | Title>;

export const Default: Story = {
  args: {
    type: "Heading",
    size: "medium",
    titleSize: "medium",
    bodyTextSize: "base",
    text: "Table cell text",
  },
  render: ({type, size, titleSize, bodyTextSize, text: children, ...otherProps}) => {
    switch (type) {
      case "Title":
        return <Title size={titleSize}>{children}</Title>
      case "Heading":
        return <Heading size={size}>{children}</Heading>
      default:
        return <BodyText size={bodyTextSize} {...otherProps}>{children}</BodyText>
    }
  }
};
// Body Text Stories
export const BodyTextBase: Story = {
  args: {
    type: "BodyText",
    children: "Table cell text",
    size: "base"
  },
};
export const BodyTextBaseStrong: Story = {
  args: {
    type: "BodyText",
    size: "base",
    strong: true,
    children: "Table cell text",
  },
};
export const BodyTextBaseUnderline: Story = {
  args: {
    type: "BodyText",
    underline: true,
    size: "base",
    children: "Table cell text"
  },
};
export const BodyTextBaseDelete: Story = {
  args: {
    type: "BodyText",
    delete: true,
    size: "base",
    children: "Table cell text"
  },
};
export const BodyTextBaseItalic: Story = {
  args: {
    type: "BodyText",
    italic: true,
    size: "base",
    children: "Table cell text"
  },
};
// Heading Stories
export const HeadingExtraLarge: Story = {
  args: {
    type: "Heading",
    size: "extra-large",
    children: "Table cell text",
  },
  render: ({size, children}) => <Heading size={size}>{children}</Heading>
};
export const HeadingLarge: Story = {
  args: {
    type: "Heading",
    size: "large",
    children: "Table cell text",
  },
  render: ({size, children}) => <Heading size={size}>{children}</Heading>
};
export const HeadingMedium: Story = {
  args: {
    type: "Heading",
    size: "medium",
    children: "Table cell text",
  },
  render: ({size, children}) => <Heading size={size}>{children}</Heading>
};
export const HeadingSmall: Story = {
  args: {
    type: "Heading",
    size: "small",
    children: "Table cell text",
  },
  render: ({size, children}) => <Heading size={size}>{children}</Heading>
};
export const HeadingExtraSmall: Story = {
  args: {
    type: "Heading",
    size: "extra-small",
    children: "Table cell text",
  },
  render: ({size, children}) => <Heading size={size}>{children}</Heading>
};
// Title Stories
export const TitleLarge: Story = {
  args: {
    type: "Title",
    titleSize: "large",
    children: "Table cell text",
  },
  render: ({titleSize: size, children}) => <Title size={size}>{children}</Title>
};
export const TitleMedium: Story = {
  args: {
    type: "Title",
    titleSize: "medium",
    children: "Table cell text",
  },
  render: ({titleSize: size, children}) => <Title size={size}>{children}</Title>
};
export const TitleExtraSmall: Story = {
  args: {
    type: "Title",
    titleSize: "small",
    children: "Table cell text",
  },
  render: ({titleSize: size, children}) => <Title size={size}>{children}</Title>
};
