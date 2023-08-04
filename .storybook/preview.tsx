import type {Preview} from "@storybook/react";
import {ConfigProvider} from "antd";
import {lightTheme} from "../themes/light-theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (<ConfigProvider theme={lightTheme}><Story/></ConfigProvider>)
  ]
};

export default preview;
