import {MinusOutlined} from "@ant-design/icons";
import styles from "./expandControl.module.scss";
import classNames from "classnames";

interface CollapseControlProps {
  checked?: boolean;
}

export const CollapseControl = ({checked = false}: CollapseControlProps) => {
  return <div className={
    classNames(
      styles.expandControlContainer,
      checked && styles.controlExpanded
    )}>
    <MinusOutlined className={styles.icon}/>
  </div>
}
