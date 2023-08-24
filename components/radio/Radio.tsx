import React from "react";
import styles from "./radio.module.scss";
import type { RadioProps } from "antd";
import { Radio as AndRadio } from "antd";
import classNames from "classnames";

export const Radio: React.FC<RadioProps> = ({ className, ...props }) => (
  <AndRadio className={classNames(styles.radio, className)} {...props} />
);

export default Radio;
