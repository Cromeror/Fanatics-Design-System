import {ConfigProvider, Table as TableAntd} from "antd";
import {HeaderItem} from "../../table/HeaderItem";
import {lightTheme} from "../../../themes/light-theme";
import {RowItem} from "../../atoms/rowItem/RowItem";
import {TableDataRow} from "../../molecules/TableDataRow";

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

  const customTheme = {
    token: {
      colorBgContainer: lightTheme.token.colorBgContainer,
      borderRadius: 0,
      borderRadiusLG: 0
    },
  };

  return (
    <ConfigProvider theme={customTheme}>
      <TableAntd columns={columnsConfig}
                 dataSource={data || []}
                 onChange={(pagination, filters, sorter) => {
                   // Agregar tu lógica de manejo de ordenación aquí
                 }}
                 components={{
                   table: ({children}) => <table>{children}</table>,
                   header: {
                     wrapper: ({children}) => <thead>{children}</thead>,
                     cell: HeaderItem,
                     row: TableHeaderRow,
                   },
                   body: {
                     wrapper: ({children}) => <tbody>{children}</tbody>,
                     cell: RowItem,
                     row: TableDataRow,
                   }
                 }}/>
    </ConfigProvider>
  );
}
