import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Color} from '../../themes/color';



const meta = {
  title: "Color",
  component: React.Component,
  tags: ["autodocs"]
} satisfies Meta<typeof React.Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const isColorLight = (color) => {
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >>  8) & 0xff;
  const b = (rgb >>  0) & 0xff;

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128;
};

export const Default: Story = {

  render: () =>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
  {Object.entries(Color).map(([name, value]) => (
    <div
      key={name}
      style={{
        backgroundColor: value,
        padding: '10px',
        color: isColorLight(value) ? 'black' : 'white',
        marginBottom: '10px',
        textAlign: 'center',
      }}
    >
      {name}: {value}
    </div>
  ))}
</div>
};
