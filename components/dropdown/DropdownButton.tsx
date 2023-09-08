import {ConfigProvider} from "antd";
import { Button as FanButton } from "./../button/Button"
import stylesDropdownButton from "./dropdownbutton.module.scss"
import {
  DownOutlined
} from "@ant-design/icons";

const BUTTON_TYPE = {
  basicInline: 'link',
  twoFold: 'secondary',
  basic: '',
  menuItem: '',
  subMenuItem: ''

};

const BUTTON_SIZE_MAP= {
  small: 'small',
  default: 'default'
};

const DROPDOWN_BUTTON_CLASSNAME_MAP = {
  basicInline: stylesDropdownButton.basicInline,
  twoFold: stylesDropdownButton.twoFold
}

export interface DropdownButtonProps {
  type?: "basicInline" | "twoFold" | "basic";
  size?: 'small' | 'default';
  fill?: 'outline' | 'filled'
  disabled?: boolean;
}

export const customTheme = {
  token: {
    borderRadius: "4px",
    borderRadiusLG: "8px",
    lineHeight: 1,
  }
}

export const DropdownButton = ({size = "default", type = "basicInline", fill= 'outline', ...otherProps}: DropdownButtonProps) => (
  <ConfigProvider theme={customTheme}>
    {type === 'basic' ? (
      <FanButton
        className={DROPDOWN_BUTTON_CLASSNAME_MAP[type]}
        size={BUTTON_SIZE_MAP[size]}
        type={fill === 'outline' ? 'secondary' : 'primary'}
        danger={false}
        {...otherProps}
      >Dropdown Button <DownOutlined/></FanButton>
    ) : (
    <><FanButton
      className={DROPDOWN_BUTTON_CLASSNAME_MAP[type]}
      size={BUTTON_SIZE_MAP[size]}
      type={BUTTON_TYPE[type]}
      danger={false}
      {...otherProps}
    />
    { type === 'twoFold' && (<FanButton
      className={stylesDropdownButton.twoFoldSecond}
      size={BUTTON_SIZE_MAP[size]}
      type={BUTTON_TYPE[type]}
      danger={false}
      {...otherProps}
    >...</FanButton>)}</>)}
  </ConfigProvider>);

export default DropdownButton;
