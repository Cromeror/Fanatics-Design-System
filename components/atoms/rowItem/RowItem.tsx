import * as React from "react";
import styles from "./rowItem.module.scss";

interface RowItemProps {
  children: number | string | React.ReactNode;
}

export const RowItem = ({children}: RowItemProps) => {
  return (
    <td className={styles.rowItemCell}>
      <div className={styles.rowItemCellWrapper}>
        {children}
      </div>
    </td>
  );
};
