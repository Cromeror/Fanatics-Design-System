import styles from "./tableDataRow.module.scss"
import classNames from "classnames";

interface TableDataRowProps {
  children?: any;
  selected?: boolean;
}

export const TableDataRow = ({children, selected = false}: TableDataRowProps) => {
  return <tr
    className={classNames(
      styles.tableDataRow,
      selected && styles.tableDataRowSelected
    )}
  >
    {children}
  </tr>
}
