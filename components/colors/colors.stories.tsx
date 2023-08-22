import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Color } from '../../themes/color';

const meta = {
  title: "Atoms/Color",
  component: React.Component,
  tags: ["autodocs"]
} as Meta<typeof React.Component>;

export default meta;

type Story = StoryObj<typeof meta>;

const isColorLight = (color) => {
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128;
};

export const Default: Story = {
  render: () => (

    <div>

      <h3>Primary Colors</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.entries(Color).slice(11, 16).map(([name, value]) => (
        <div>
          <div
          key={name}
          style={{
            backgroundColor: value,
            padding: '10px',
            color: isColorLight(value) ? 'black' : 'white',
            marginRight: '20px', // Increase the margin for more width
            marginBottom: '10px',
            width: '120px', // Set width
            height: '70px', // Set height
            display: 'flex',
            flexDirection: 'column', // Stack content vertically
            justifyContent: 'flex-end', // Align items to the bottom
          }}
        >
        </div>
        <div style={{paddingLeft: '5px'}}>
          <div>{name}</div>
          <div>{value}</div>
        </div>
        </div>

      ))}
    </div>
      <h3>Alert Colors</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.entries(Color).slice(6, 9).map(([name, value]) => (
        <div>
          <div
          key={name}
          style={{
            backgroundColor: value,
            padding: '10px',
            color: isColorLight(value) ? 'black' : 'white',
            marginRight: '20px', // Increase the margin for more width
            marginBottom: '10px',
            width: '120px', // Set width
            height: '70px', // Set height
            display: 'flex',
            flexDirection: 'column', // Stack content vertically
            justifyContent: 'flex-end', // Align items to the bottom
          }}
        >
        </div>
        <div style={{paddingLeft: '5px'}}>
          <div>{name}</div>
          <div>{value}</div>
        </div>
        </div>

      ))}
    </div>
    <h3>Gray Scale Colors</h3>

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.entries(Color).slice(21, 26).map(([name, value]) => (
        <div>
          <div
          key={name}
          style={{
            backgroundColor: value,
            padding: '10px',
            color: isColorLight(value) ? 'black' : 'white',
            marginRight: '20px', // Increase the margin for more width
            marginBottom: '10px',
            width: '120px', // Set width
            height: '70px', // Set height
            display: 'flex',
            flexDirection: 'column', // Stack content vertically
            justifyContent: 'flex-end', // Align items to the bottom
          }}
        >
        </div>
        <div style={{paddingLeft: '5px'}}>
          <div>{name}</div>
          <div>{value}</div>
        </div>
        </div>

      ))}
    </div>

    </div>

  ),
};
