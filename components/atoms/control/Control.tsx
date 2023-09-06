import Checkbox from "../checkbox";
import Radio from "../radio";
import React from "react";
import styles from "./control.module.scss";
import {DownOutlined} from "@ant-design/icons";
import {ExpandControl} from "./ExpandControl";
import {CollapseControl} from "./CollapseControl";

export interface ControlProps {
  type?:
    | "checkbox"
    | "dropdown"
    | "empty"
    | "radio"
    | "indeterminate"
    | "expand"
    | "collapse";
  checked?: boolean;
}

export const Control = ({type = "empty", checked}: ControlProps) => {
  return (
    <>
      {type === "collapse" && <CollapseControl checked={checked}/>}
      {type === "expand" && <ExpandControl checked={checked}/>}
      {type === "radio" && <Radio/>}
      {type === "dropdown" && (
        <div className={styles.controlContainer}>
          <Checkbox/>
          <DownOutlined className={styles.icon}/>
        </div>
      )}
      {type !== "radio" && type !== "empty" && type !== "dropdown" && type !== "expand" && type !== "collapse" && (
        <Checkbox/>
      )}
    </>
  );
};

export default Control;
