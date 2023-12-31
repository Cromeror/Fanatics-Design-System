import {Button as AntdButton, ConfigProvider} from "antd";
import stylesButton from "./button.module.scss"
import classNames from "classnames";

const BUTTON_TYPE = {
  primary: 'primary',
  secondary: 'default',
  text: 'text',
  link: 'link',
  tertiary: "primary"
};

const BUTTON_SIZE_MAP = {
  small: 'small',
  default: 'middle',
  large: 'large',
};

const BUTTON_SIZE_CLASSNAME_MAP = {
  small: stylesButton.sizeSmall,
  default: stylesButton.sizeMiddle,
  large: stylesButton.sizeLarge,
};

const BUTTON_CLASSNAME_MAP = {
  primary: stylesButton.primaryButton,
  secondary: stylesButton.secondaryButton,
  link: stylesButton.linkButton,
  text: stylesButton.textButton,
  tertiary: stylesButton.tertiaryButton
}

const BUTTON_DANGER_CLASSNAME_MAP = {
  primary: stylesButton.primaryButtonDanger,
  secondary: stylesButton.secondaryButtonDanger,
  link: stylesButton.linkButtonDanger,
  text: stylesButton.textButtonDanger,
  tertiary: stylesButton.primaryButtonDanger
}

export interface ButtonProps {
  type?: "primary" | "secondary" | "link" | "text" | "tertiary";
  size?: 'small' | 'default' | 'large';
  icon?: boolean;
  disabled?: boolean;
  danger?: boolean;
}

export const customTheme = {
  token: {
    borderRadius: "4px",
    borderRadiusLG: "8px",
    lineHeight: 1,
  }
}

export const Button = ({size = "default", type = "primary", danger, icon = false, ...otherProps}: ButtonProps) => (
  <ConfigProvider theme={customTheme}>
    <AntdButton
      className={
        classNames(
          !!danger ? BUTTON_DANGER_CLASSNAME_MAP[type] : BUTTON_CLASSNAME_MAP[type],
          icon && stylesButton.iconButton,
          BUTTON_SIZE_CLASSNAME_MAP[size]
        )}
      size={BUTTON_SIZE_MAP[size]}
      type={BUTTON_TYPE[type]}
      danger={danger}
      {...otherProps}
    />
  </ConfigProvider>);

export default Button;
