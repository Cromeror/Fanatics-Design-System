import { ReactElement } from "react";
import { ConfigProvider, Dropdown, Table } from "antd";
import { HeaderItem } from "../atoms/headerItem/HeaderItem";

const columnsExample = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
    search: true,
    type: "select",
    selectOptions: [
      {
        label: "1",
        value: 1,
      },
    ],
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    filters: [
      {
        label: "London",
        value: "London",
      },
      {
        label: "New York",
        value: "New York",
      },
      {
        label: "San Francisco",
        value: "San Francisco",
      },
    ],
    onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

interface HeaderItemProps {
  children: ReactElement;
  size?: "small" | "middle" | "large";
}

export const customTheme = {
  token: {
    colorBgContainer: "#F5F6F8",
  },
};

const TableHeaderRow = ({ children }) => {
  return <tr>{children}</tr>;
};

//TODO: como pasar el metodo onfilter para filtrar la tabla

export const TableExample = ({
  size = "middle",
  columns = columnsExample,
}: HeaderItemProps) => {
  const columnsConfig = columns.map(
    ({ filters, title, search, selectOptions, sorter, type, ...props }) => {
      return {
        ...props,
        onHeaderCell: (column) => ({
          filters,
          title,
          search,
          selectOptions,
          sorter,
          type,
        }),
      };
    }
  );

  return (
    <ConfigProvider theme={customTheme}>
      <Table
        columns={columnsConfig}
        dataSource={data}
        onChange={(pagination, filters, sorter) => {
          // Agregar tu lógica de manejo de ordenación aquí
        }}
        components={{
          header: {
            wrapper: ({ children }) => <thead>{children}</thead>,
            cell: HeaderItem,
            row: TableHeaderRow,
          },
        }}
      />
    </ConfigProvider>
  );
};
