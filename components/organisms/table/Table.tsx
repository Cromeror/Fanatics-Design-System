import {Table as TableAntd} from "antd";
import {HeaderItem} from "../../table/HeaderItem";

interface TableProps {
  columns: any[];
  data: any[];
}

export const Table = ({columns, data}: TableProps) => {
  const columnsConfig = columns.map(
    ({filters, title, search, selectOptions, sorter, type, ...props}) => {
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

  const TableHeaderRow = ({children}) => {
    return <tr>{children}</tr>;
  };

  return (
    <TableAntd columns={columnsConfig}
               dataSource={data || []}
               onChange={(pagination, filters, sorter) => {
                 // Agregar tu lógica de manejo de ordenación aquí
               }}
               components={{
                 header: {
                   wrapper: ({children}) => <thead>{children}</thead>,
                   cell: HeaderItem,
                   row: TableHeaderRow,
                 },
               }}/>
  );
}
