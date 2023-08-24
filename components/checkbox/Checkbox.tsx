import React from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";
import type { CheckboxProps } from "antd";
import { Checkbox as AntCheckbox } from "antd";

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => (
  <AntCheckbox className={classNames(styles.checkbox, className)} {...props} />
);

export default Checkbox;
