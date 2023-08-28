import * as React from "react";
import styles from "./rowItem.module.scss";
interface RowItemProps {
  children: React.ReactNode;
  selected?: boolean;
}


export const RowItem = ({ children, selected}: RowItemProps) => {
  return (
      <tr className={`${styles.rowItem} ${selected ? styles.selected : ""}`}>
        <td className={styles.rowItemCell}>{children}</td>
      </tr>
  );
};

export default RowItem;
