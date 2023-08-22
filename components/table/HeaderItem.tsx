import styles from "./HeaderItem.module.scss"
import {BodyText} from "../typography/BodyText";
import {CaretDownOutlined, CaretUpOutlined, FilterFilled, SearchOutlined} from "@ant-design/icons";

interface HeaderItemProps {
  title: string
}

export const HEADER_ITEM_TYPES = {
  default: "default",
  bulkInput: "bulkInput",
  bulkSelect: "bulkSelect",
}

const SorterComponent = () => {
  return (
    <div className={styles.sorterContainer}>
      <CaretUpOutlined/>
      <CaretDownOutlined/>
    </div>
  )
}

export const HeaderItem = ({title, sorter, ...props}: HeaderItemProps) => {
  return (
    <th className={styles.headerItem}>
      <div className={styles.headerItem__titleSection}>
        <BodyText size={"small"}>{title}</BodyText>
        {sorter && <SorterComponent/>}
        <FilterFilled/>
        <SearchOutlined/>
      </div>
    </th>
  )
}
