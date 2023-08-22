import { ReactElement } from "react";
import { Table as TableAntd, ConfigProvider } from "antd";


export const HEADER_ITEM_TYPES = {
  default: "default",
  bulkImput: "bulkImput",
  bulkSelect: "bulkSelect",
}

interface HeaderItemProps {
  children: ReactElement;
}

export const custonTheme = {
  token: {
    colorBgContainer: "#F5F6F8",
  }
}

export const Table = ({ columns }: HeaderItemProps) => {
  return (
    <ConfigProvider theme={custonTheme}>
      <TableAntd columns={columns} dataSource={[]} />
    </ConfigProvider>
    );
}

export default Table;
