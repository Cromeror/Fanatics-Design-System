import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {Heading} from "../components/typography/Heading";
import {Title} from "../components/typography/Title";
import {BodyText} from "../components/typography/BodyText";
import { Button } from "../components/button/button";
import {ConfigProvider, Typography} from "antd";
import {lightTheme} from "../themes/light-theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={lightTheme}>
      <Heading as={Typography.Title}>Table cell text</Heading>
      <Title as={Typography.Text}>Table cell text</Title>
      <BodyText underline={true}>Table cell text</BodyText>
      <Button size="default" color="primary-active" type='primary' hoverColor='primary-Hover'>
        Botón
      </Button>
      <Button size="small" type='link' hoverColor='primary-Hover'>
        Botón
      </Button>
      <Button size="large" type='text' hoverColor='primary-Hover'>
        Botón
      </Button>
    </ConfigProvider>
  </React.StrictMode>)
