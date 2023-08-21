import { ReactElement } from "react";
import { Table } from "antd";
import type { ColumnsType } from 'antd/es/table';
import stylesButton from "../button/button.module.scss";


interface DataType {
  key: string;
  tableHeader1: string;
  tableHeader2: string;
  sort?: string;
  filter?: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Table header1',
    dataIndex: 'tableHeader1',
    key: 'tableHeader1',
    sorter: (a, b) => a.sort.localeCompare(b.sort),
    filters: [
      { text: 'Filter 1', value: 'filter1' },
      { text: 'Filter 2', value: 'filter2' },
    ], // Opciones de filtro
    onFilter: (value, record) => record.filter.includes(value),
  },
  {
    title: 'Table header2',
    dataIndex: 'tableHeader2',
    key: 'tableHeader2',
  }
];

export const HEADER_ITEM_TYPES = {
  default: "default",
  bulkImput: "bulkImput",
  bulkSelect: "bulkSelect",
}

interface HeaderItemProps {
  children: ReactElement;
  size?: "small" | "middle" | "large";
}

//colorBgContainer  headerClassName={stylesButton.test123}

const styles = {
  backgroundColor: "red"
}

export const HeaderItem = ({ children, size = "middle" }: HeaderItemProps) => {
  return <Table columns={columns} dataSource={[]} size={size} />;
}

export default HeaderItem;
