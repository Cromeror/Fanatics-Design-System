import { useState } from "react"; // Importa useState
import styles from "./HeaderItem.module.scss";
import { BodyText } from "../typography/BodyText";
import { CaretDownOutlined, CaretUpOutlined, FilterFilled, SearchOutlined } from "@ant-design/icons";

interface HeaderItemProps {
  title: string;
  sorter?: boolean; // Agrega el prop sorter
  filters?: boolean; // Agrega el prop filters
  search?: boolean; // Agrega el prop search
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
  const [searchText, setSearchText] = useState(""); // Estado para el texto de búsqueda

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value); // Actualizar el estado del texto de búsqueda
  };

  return (
    <th className={styles.headerItem}>
      <div className={styles.headerItem__titleSection}>
        <BodyText size={"small"}>{title}</BodyText>
        {sorter && <SorterComponent />}
        {filters && <FilterFilled />}
        {search && (
          <>
            <SearchOutlined />
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange} // Manejar cambios en el campo de búsqueda
              className={styles.searchInput}
              placeholder="Search"
            />
          </>
        )}
      </div>
    </th>
  );
};
