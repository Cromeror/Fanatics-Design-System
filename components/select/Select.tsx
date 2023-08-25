import {Select as AntSelect, SelectProps} from "antd";
import {FC} from "react";

export const Select: FC<SelectProps> = ({options, handleChange}: any) => (
  <AntSelect
    defaultValue="default"
    onChange={handleChange}
    options={options}/>
);
