import * as React from "react";
import { FC, useState } from "react";
import styles from "./HeaderItem.module.scss";
import { BodyText } from "../typography/BodyText";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  FilterFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { Select } from "../select/Select";
import classNames from "classnames";
import { SelectValue } from "antd/es/select";

interface HeaderItemProps {
  title: string | React.ReactNode;
  sorter?: boolean;
  filters?: boolean;
  search?: boolean;
  type?: "default" | "bulk" | "select";
  selectOptions?: {
    label: React.ReactNode;
    value?: string | number | null;
  }[];
}

const SorterComponent = () => {
  return (
    <div className={styles.sorterContainer}>
      <CaretUpOutlined />
      <CaretDownOutlined />
    </div>
  );
};

export const HeaderItem: FC<HeaderItemProps> = ({
  title,
  sorter,
  filters,
  search,
  selectOptions = [],
  type = "default",
}: HeaderItemProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);
  const handleBulkSelectChange = (value: SelectValue) =>
    console.log("Selected value:", value);

  return (
    <th className={styles.headerItem}>
      <div
        className={classNames(
          styles.headerItem__titleSection,
          type !== "default" && styles.headerItem__hasInput
        )}
      >
        <BodyText size={"small"}>{title}</BodyText>
        <div className={styles.iconsContainer}>
          {sorter && <SorterComponent />}
          {filters && <FilterFilled />}
          {search && <SearchOutlined />}
        </div>
      </div>
      {type === "select" && selectOptions && (
        <Select options={selectOptions} onChange={handleBulkSelectChange} />
      )}
      {type === "bulk" && (
        <Input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Input"
        />
      )}
    </th>
  );
};
