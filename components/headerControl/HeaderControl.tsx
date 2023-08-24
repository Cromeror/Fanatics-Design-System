import Checkbox from "../checkbox";
import Radio from "../radio";
import React from "react";
import classNames from "classnames";
import styles from "./headerControl.module.scss";
import { DownOutlined } from "@ant-design/icons";

export interface HeaderControlProps {
  type?:
    | "checkbox"
    | "dropdown"
    | "empty"
    | "radio"
    | "indeterminate"
    | "expand"
    | "collapse";
}

export const HeaderControl = ({ type = "empty" }: HeaderControlProps) => {
  return (
    <div
      className={classNames(
        styles.container,
        type === "dropdown" && styles.containerDropdown
      )}
    >
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
    </div>
  );
};

export default HeaderControl;
