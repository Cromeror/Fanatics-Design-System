import {ReactElement} from "react";
import {ConfigProvider, Table} from "antd";
import {HeaderItem} from "./HeaderItem";

const customColumns = [
  {
    title: 'Table header1',
    dataIndex: 'tableHeader1',
    key: 'tableHeader1',
    sorter: (a, b) => {
      debugger;
      return a.sort.localeCompare(b.sort)
    },
    filters: [
      {text: 'Filter 1', value: 'filter1'},
      {text: 'Filter 2', value: 'filter2'},
    ], // Opciones de filtro
    onFilter: (value, record) => record.filter.includes(value)
  },
  {
    title: 'Table header2',
    dataIndex: 'tableHeader2',
    key: 'tableHeader2',
  }
];


const columnsExample = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

interface HeaderItemProps {
  children: ReactElement;
  size?: "small" | "middle" | "large";
}

export const customTheme = {
  token: {
    colorBgContainer: "#F5F6F8",
  }
}

const TableHeaderRow = ({children}) => {
  return (
    <tr>
      {children}
    </tr>
  )
}

//TODO: como pasar el metodo onfilter para filtrar la tabla

export const TableExample = ({size = "middle", columns = columnsExample}: HeaderItemProps) => {
  const columnsConfig = columns.map(({title, sorter, ...props}) => {
    console.log("---->", props)
    return {
      ...props,
      onHeaderCell: (column) => {
        console.log("COLUMN", column)
        return {title, sorter}
      }
    }
  })

  return (
    <ConfigProvider theme={customTheme}>
      <Table columns={columnsConfig} dataSource={data}
             onChange={(pagination, filters, sorter) => {
               // Agregar tu lógica de manejo de ordenación aquí
               console.log('Table sorted:', sorter);
             }}

             components={{
               header: {
                 wrapper: ({children}) => (<thead>{children}</thead>),
                 cell: HeaderItem,
                 row: TableHeaderRow
               }
             }}/>
    </ConfigProvider>
  );
}
