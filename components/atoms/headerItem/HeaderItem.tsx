import * as React from "react";
import {FC, useState} from "react";
import styles from "./HeaderItem.module.scss";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  FilterFilled,
  SearchOutlined,
} from "@ant-design/icons";
import {Input} from "antd";
import {Select} from "../select/Select";
import classNames from "classnames";
import {SelectValue} from "antd/es/select";
import {FilterMenu} from "../filterMenu/FilterMenu";

export type Options = {
  label: React.ReactNode;
  value?: string | number | null;
};

interface HeaderItemProps {
  title: string | React.ReactNode;
  sorter?: boolean;
  filters?: Options[];
  search?: boolean;
  type?: "default" | "bulk" | "select";
  selectOptions?: Options[];
}

const SorterComponent = () => {
  return (
    <div className={styles.sorterContainer}>
      <CaretUpOutlined/>
      <CaretDownOutlined/>
    </div>
  );
};

export const HeaderItem: FC<HeaderItemProps> = ({
                                                  title,
                                                  sorter,
                                                  filters = [],
                                                  search,
                                                  selectOptions = [],
                                                  type = "default",
                                                }: HeaderItemProps) => {
  const [searchText, setSearchText] = useState("");
  const hasFilters = filters!.length > 0;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);
  const handleBulkSelectChange = (value: SelectValue) =>
    console.log("Selected value:", value);

  return (
    <th className={styles.headerItem}>
      <div className={classNames(styles.headerItem__titleSection)}>
        {title}
        <div className={styles.iconsContainer}>
          {sorter && <SorterComponent/>}
          {hasFilters && (
            <FilterMenu options={filters}>
              <FilterFilled/>
            </FilterMenu>
          )}
          {search && <SearchOutlined/>}
        </div>
      </div>
      {type === "select" && selectOptions && (
        <Select
          className={styles.select}
          options={selectOptions}
          onChange={handleBulkSelectChange}
        />
      )}
      {type === "bulk" && (
        <Input
          className={styles.input}
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Input"
        />
      )}
    </th>
  );
};
