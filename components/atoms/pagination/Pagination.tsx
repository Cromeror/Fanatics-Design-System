import React from "react";
import styles from "./pagination.module.scss";
import classNames from "classnames";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

export interface PaginationProps {
  type?: "number" | "arrow" | "end";
  value?: number;
  selected?: boolean;
  disabled?: boolean;
  direction?: "left" | "right";
  onClick?: () => void;
}

export const Pagination = ({
  type = "number",
  value,
  selected = false,
  disabled = false,
  direction = "left",
  onClick,
}: PaginationProps) => {
  return (
    <div
      className={classNames(
        styles.container,
        selected && type === "number" && styles.selected,
        disabled && styles.disabled
      )}
      onClick={onClick}
    >
      {type === "number" && value}
      {type === "arrow" && direction === "left" && <LeftOutlined />}
      {type === "arrow" && direction === "right" && <RightOutlined />}
      {type === "end" && direction === "left" && <DoubleLeftOutlined />}
      {type === "end" && direction === "right" && <DoubleRightOutlined />}
    </div>
  );
};

export default Pagination;
