import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {Heading} from "../components/typography/Heading";
import {Title} from "../components/typography/Title";
import {BodyText} from "../components/typography/BodyText";
import { Button } from "../components/button/button";
import { Logotype } from "../components/logotype/Logotype"
import {ConfigProvider, Typography} from "antd";
import {lightTheme} from "../themes/light-theme";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={lightTheme}>
      <Heading as={Typography.Title}>Table cell text</Heading>
      <Title as={Typography.Text}>Table cell text</Title>
      <BodyText underline={true}>Table cell text</BodyText>
      <br />
      <Logotype type='primary'/>
      <Logotype type='reversed'/>
      <br />
      <Button type='primary'>
        Botón
      </Button>
      <br />
      <Button size="large" type='secondary'>
        Secondary
      </Button>
      <br />
      <Button size="large" type='text'>
        Botón
      </Button>
      <br />
      <Button size="large" type='link'>
        Botón
      </Button>
      <br />
      <Button size="large" type='textDark'>
        Botón
      </Button>
    </ConfigProvider>
  </React.StrictMode>)
