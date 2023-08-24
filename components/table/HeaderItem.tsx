import { useState } from "react";
import styles from "./HeaderItem.module.scss";
import { BodyText } from "../typography/BodyText";
import { CaretDownOutlined, CaretUpOutlined, FilterFilled, SearchOutlined } from "@ant-design/icons";
import Select from "antd/es/select";

interface HeaderItemProps {
  title: string;
  sorter?: boolean;
  filters?: boolean;
  search?: boolean;
  bulkSelect?: boolean; // Nueva prop bulkSelect
  bulkSelectOptions?: any[]; // Opciones para el componente BulkSelect
}

const SorterComponent = () => {
  return (
    <div className={styles.sorterContainer}>
      <CaretUpOutlined />
      <CaretDownOutlined />
    </div>
  );
};

const BulkSelectComponent = ({ options, handleChange }: any) => (
  <Select defaultValue="default" onChange={handleChange} options={options} />
);

export const HeaderItem = ({
  title,
  sorter,
  filters,
  search,
  bulkSelect,
  bulkSelectOptions,
}: HeaderItemProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleBulkSelectChange = (value: any) => {
    console.log("Selected value:", value);
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
      {bulkSelect && bulkSelectOptions && (
        <div className={styles.searchContainer}>
          <BulkSelectComponent options={bulkSelectOptions} handleChange={handleBulkSelectChange} />
        </div>
          )}
      {search && !bulkSelect && (
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
