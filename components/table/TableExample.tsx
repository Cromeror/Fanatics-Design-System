import {ReactElement} from "react";
import {ConfigProvider, Table} from "antd";
import styles from "./TableHeader.module.css"


interface DataType {
  key: string;
  tableHeader1: string;
  tableHeader2: string;
  sort?: string;
  filter?: string;
}

const customColumns = [
  {
    title: 'Table header1',
    dataIndex: 'tableHeader1',
    key: 'tableHeader1',
    sorter: (a, b) => a.sort.localeCompare(b.sort),
    filters: [
      {text: 'Filter 1', value: 'filter1'},
      {text: 'Filter 2', value: 'filter2'},
    ], // Opciones de filtro
    onFilter: (value, record) => record.filter.includes(value),
    onHeaderCell: (column)=>{
      console.log("column", column)
      return column
    }
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

export const custonTheme = {
  token: {
    colorBgContainer: "#F5F6F8",
  }
}

const TableHeaderRow = ({children}) => {
  return (
    <tr >
      {children}
    </tr>
  )
}

const TableHeader = ({children, ...props}) => {
  console.log(props)
  return (
    <th className={styles.tableRow}>{children}</th>
  )
}

export const TableExample = ({size = "middle", columns=customColumns}: HeaderItemProps) => {
  return (
    <ConfigProvider theme={custonTheme}>
      <Table columns={columns} dataSource={[]} size={size} components={{
        header: {
          wrapper: ({children})=>(<thead>{children}</thead>),
          cell: TableHeader,
          row: TableHeaderRow
        }
      }}/>
    </ConfigProvider>
  );
}
