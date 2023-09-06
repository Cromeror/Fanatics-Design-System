import {PlusOutlined} from "@ant-design/icons";
import styles from "./expandControl.module.scss";
import classNames from "classnames";

interface ExpandControlProps {
  checked?: boolean;
}

export const ExpandControl = ({checked = false}: ExpandControlProps) => {
  return <div className={
    classNames(
      styles.expandControlContainer,
      checked && styles.controlExpanded
    )}>
    <PlusOutlined className={styles.icon}/>
  </div>
}
