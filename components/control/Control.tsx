import Checkbox from "../checkbox";
import Radio from "../radio";
import React from "react";
import styles from "./control.module.scss";
import { DownOutlined } from "@ant-design/icons";

export interface ControlProps {
  type?:
    | "checkbox"
    | "dropdown"
    | "empty"
    | "radio"
    | "indeterminate"
    | "expand"
    | "collapse";
}

export const Control = ({ type = "empty" }: ControlProps) => {
  return (
    <>
      {type === "radio" && <Radio />}
      {type === "dropdown" && (
        <>
          <Checkbox />
          <DownOutlined className={styles.icon} />
        </>
      )}
      {type !== "radio" && type !== "empty" && type != "dropdown" && (
        <Checkbox />
      )}
    </>
  );
};

export default Control;
