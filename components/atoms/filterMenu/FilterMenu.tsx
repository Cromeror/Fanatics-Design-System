import { Checkbox, Input, Dropdown, CheckboxOptionType } from "antd";
import styles from "./filterMenu.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import type { Options } from "../headerItem/HeaderItem";
import React, { ReactNode, useEffect, useState } from "react";

interface FilterMenuProps {
  options: Options[];
  children: ReactNode;
}

export const FilterMenu = ({ children, options }: FilterMenuProps) => {
  const [searchValue, setSearValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<Options[]>(options);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        (option?.label as string)
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
  }, [options, searchValue]);

  return (
    <Dropdown
      arrow
      dropdownRender={() => (
        <div className={styles.container}>
          <Input
            className={styles.filter}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setSearValue(e.target.value)}
            suffix={<SearchOutlined />}
          />
          <div className={styles.tagContainer}>
            {
              <Checkbox.Group
                options={filteredOptions as CheckboxOptionType[]}
              />
            }
          </div>
        </div>
      )}
      placement="bottomRight"
      trigger={["click"]}
    >
      {children}
    </Dropdown>
  );
};

export default FilterMenu;
