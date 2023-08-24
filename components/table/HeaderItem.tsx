import { useState } from "react";
import styles from "./HeaderItem.module.scss";
import { BodyText } from "../typography/BodyText";
import { CaretDownOutlined, CaretUpOutlined, FilterFilled, SearchOutlined } from "@ant-design/icons";

interface HeaderItemProps {
  title: string;
  sorter?: boolean;
  filters?: boolean;
  search?: boolean;
}

const SorterComponent = () => {
  return (
    <div className={styles.sorterContainer}>
      <CaretUpOutlined />
      <CaretDownOutlined />
    </div>
  );
};

export const HeaderItem = ({ title, sorter, filters, search }: HeaderItemProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <th className={styles.headerItem}>
      <div className={styles.headerItem__titleSection}>
        <BodyText size={"small"}>{title}</BodyText>
        <div className={styles.iconsContainer}>
          {sorter && <SorterComponent />}
          {filters && <FilterFilled />}
          {search && <SearchOutlined />}
        </div>
      </div>
      {search && (
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            className={styles.searchInput}
            placeholder="Search"
          />
        </div>
      )}
    </th>
  );
};
