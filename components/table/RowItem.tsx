import * as React from "react";
import styles from "./rowItem.module.scss";
import {BodyText} from "../typography/BodyText";

interface RowItemProps {
  children: React.ReactNode;
  selected?: boolean;
}

export const RowItem = ({children, selected}: RowItemProps) => {
  return (
    <tr className={`${styles.rowItem} ${selected ? styles.selected : ""}`}>
      <td className={styles.rowItemCell}>
        <BodyText size={"small"}>{children}</BodyText>
      </td>
    </tr>
  );
};
