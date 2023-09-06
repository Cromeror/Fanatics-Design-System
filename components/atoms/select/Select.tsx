import { Select as AntSelect, SelectProps } from "antd";
import { FC } from "react";

export const Select: FC<SelectProps> = ({ className, options, onChange }) => (
  <AntSelect
    className={className}
    defaultValue="default"
    onChange={onChange}
    options={options}
  />
);
