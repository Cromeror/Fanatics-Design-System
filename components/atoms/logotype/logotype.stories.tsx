import type {Meta, StoryObj} from "@storybook/react";
import {Logotype} from "./Logotype";
import {lightTheme} from "../../../themes/light-theme";

const meta = {
  title: "Atoms/Logotype",
  component: Logotype,
  tags: ["autodocs"]
} as Meta<typeof Logotype>;

export default meta;
type Story = StoryObj<typeof Logotype>;

export const Default: Story = {
  args: {
    type: "primary"
  },
};

export const Reversed: Story = {
  args: {
    type: "reversed"
  },
  render: ({type}) => (
    <div style={{backgroundColor: lightTheme.token.colorSecondary, width: "fit-content"}}>
      <Logotype type={type}/>
    </div>
  )
};
