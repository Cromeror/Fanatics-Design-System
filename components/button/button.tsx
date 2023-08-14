import { Button as AntdButton, ButtonProps as AntdButtonProps, theme } from "antd";
import styles from './button.css';


export type ButtonProps = AntdButtonProps;

export const BUTTON_BG_COLOR = {
  //default
  "primary-default": "colorPrimary",
  "secondary-default": "colorBgContainerDisabled",
  "text-default": "colorBackground",
  "link-default": "colorBackground",
  "text-dark": "colorSecondary",

  //Active
  "primary-Active": "colorSecondaryBg",
  "secondary-Active": "colorBackground",
  "text-Active": "colorBackground",
  "link-Active": "colorBackground",
  "text-dark-Active": "colorBgContainerDisabled",

  //Hover
  "primary-Hover": "colorTertiary",
  "secondary-Hover": "colorBackground",
  "text-Hover": "colorBackground",
  "link-Hover": "colorBackground",
  "text-dark-Hover": "colorBgContainerDisabled",

  //Focus
  "primary-Focus": "colorSecondaryBg",
  "secondary-Focus": "colorBackground",
  "text-Focus": "colorBackground",
  "link-Focus": "colorBackground",
  "text-dark-Focus": "colorBgContainerDisabled",

  //Disable
  "primary-disable": "colorSecondaryBg",
  "secondary-disable": "colorBackground",
  "text-disable": "colorBackground",
  "link-disable": "colorBackground",
  "text-dark-disable": "colorBgContainerDisabled",
};

export const BUTTON_SIZE = {
  small: 'small',
  default: 'middle',
  large: 'large',
};

export const BUTTON_TYPE = {
  primary: 'primary',
  secondary: 'default',
  text: 'text',
  link: 'link',
  "text-dark": "primary"
};

export const Button = ({
  children,
  size = "large",
  color = "primary-default",
  type = "primary",
  hoverColor = null,
}: ButtonProps & {
  hoverColor?: string | null;
}) => {
  const { token } = theme.useToken();

  return (
    <AntdButton
      className={styles["custom-button-colorTertiary"]}
      size={BUTTON_SIZE[size]}
      type={BUTTON_TYPE[type]}
      disabled={false}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
