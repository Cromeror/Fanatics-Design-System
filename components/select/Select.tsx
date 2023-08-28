import { Select as AntSelect, SelectProps } from "antd";
import { FC } from "react";

export const Select: FC<SelectProps> = ({ options, onChange }) => (
  <AntSelect defaultValue="default" onChange={onChange} options={options} />
);
