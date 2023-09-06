import React, { useState } from "react";
import PaginationItem from "../../atoms/pagination";
import styles from "./pagination.module.scss";

interface PaginationProps {
  numbers: number[];
}

export const Pagination = ({ numbers }: PaginationProps) => {
  const [selected, setSelected] = useState(
    numbers.length > 0 ? numbers[0] : null
  );

  if (numbers.length === 0) {
    return;
  }

  const changePage = (
    page: number | null,
    type: string,
    direction?: string
  ) => {
    if (type === "number") {
      setSelected(page);
    } else {
      setSelected((prevSelected) => {
        if (
          (prevSelected === numbers[0] && direction === "left") ||
          (prevSelected === numbers[numbers.length - 1] &&
            direction === "right")
        ) {
          return prevSelected;
        }
        return direction === "left"
          ? (prevSelected as number) - 1
          : (prevSelected as number) + 1;
      });
    }
  };

  return (
    <div className={styles.container}>
      <PaginationItem
        type="arrow"
        direction="left"
        onClick={() => changePage(null, "arrow", "left")}
      />
      {numbers.map((number) => (
        <PaginationItem
          key={`pagination-item-${number}`}
          type="number"
          value={number}
          selected={number === selected}
          onClick={() => changePage(number, "number")}
        />
      ))}
      <PaginationItem
        type="arrow"
        direction="right"
        onClick={() => changePage(null, "arrow", "right")}
      />
    </div>
  );
};

export default Pagination;
