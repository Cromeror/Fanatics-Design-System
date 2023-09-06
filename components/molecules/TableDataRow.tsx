import styles from "./tableDataRow.module.scss"

interface TableDataRowProps {
  children?: any
}

export const TableDataRow = ({children}: TableDataRowProps) => {
  return <tr className={styles.tableDataRow}>{children}</tr>
}
