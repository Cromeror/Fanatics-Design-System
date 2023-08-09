import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {Heading} from "../components/typograpy/Heading/Heading";
import {ConfigProvider, Typography} from "antd";
import {lightTheme} from "../themes/light-theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={lightTheme}>
      <Heading>Table cell text</Heading>
      <Heading as={Typography.Text}>Table cell text</Heading>
      <Heading as={Typography.Link}>Table cell text</Heading>
    </ConfigProvider>
  </React.StrictMode>)
