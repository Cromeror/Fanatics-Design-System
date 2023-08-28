import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {Heading} from "../components/typography/Heading";
import {Title} from "../components/typography/Title";
import {BodyText} from "../components/typography/BodyText";
import {Button} from "../components/button/Button";
import {Logotype} from "../components/logotype/Logotype"
import {ConfigProvider, Space, Typography} from "antd";
import {lightTheme} from "../themes/light-theme";
import {TableExample} from "../components/table/TableExample";
import { HeaderItem } from '../components/table/HeaderItem';
import {RowItem} from '../components/table/RowItem';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={lightTheme}>
      <Space direction="vertical">
        <Space>
          <Heading as={Typography.Title}>Table cell text</Heading>
          <Title as={Typography.Text}>Table cell text</Title>
          <BodyText underline={true}>Table cell text</BodyText>
        </Space>
        <Space>
          <Logotype type='primary'/>
          <Logotype type='reversed'/>
        </Space>
        <Space>
          <Button type='primary' >Primary Button</Button>
          <Button type='primary' size='small'>Primary Button</Button>
          <Button type='primary' size='large'>Primary Button</Button>
          <Button type='primary' danger>Primary Button</Button>
          <Button type='secondary'>Secondary Button</Button>
          <Button type='secondary' danger>Secondary Button</Button>
          <Button type='text'>Text Button</Button>
          <Button type='text' danger>Text Button</Button>
          <Button type='link'>Link Button</Button>
          <Button type='link' danger>Link Button</Button>
          <Button type='textDark'>Text Dark Button</Button>
        </Space>
        <Space>
          <TableExample></TableExample>
          <HeaderItem
            title={'Header Item'}
            search={true}
            bulkSelect={true}
            bulkSelectOptions={[{ value: 'Option 1', label: 'Option 1' },
              { value: 'Option 2', label: 'Option 2' },]}>
          </HeaderItem>
          <HeaderItem
            title={'Header Item'}
            search={true}
            >
          </HeaderItem>
        </Space>
        <Space>
          <RowItem children={'Hola'}></RowItem>
        </Space>
      </Space>
    </ConfigProvider>
  </React.StrictMode>)
