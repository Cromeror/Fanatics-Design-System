import React from "react";
import styles from "./rowItem.module.scss";
interface RowItemProps {
  children: React.ReactNode;
}

export const RowItem = ({ children }: RowItemProps) => {
  return <tr className={styles.rowItem}><td>{children}</td></tr>;
};

export default RowItem;
