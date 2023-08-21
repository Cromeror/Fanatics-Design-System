import {Button as AntdButton, ConfigProvider} from "antd";
import {Color} from '../../themes/color'
import stylesButton from "./button.module.scss"



const BUTTON_TYPE = {
  primary: 'primary',
  secondary: 'default',
  text: 'text',
  link: 'link',
  "text-dark": "primary"
};

const BUTTON_SIZE_MAP = {
  small: 'small',
  default: 'middle',
  large: 'large',
};

const BUTTON_CLASSNAME_MAP = {
  primary: stylesButton.primaryButton,
  secondary: stylesButton.secondaryButton,
  link: stylesButton.linkButton,
  text: stylesButton.textButton,
  "textDark": stylesButton.textDarkButton
}

const BUTTON_DANGER_CLASSNAME_MAP = {
  primary: stylesButton.primaryButtonDanger,
  secondary: stylesButton.secondaryButtonDanger,
  link: stylesButton.linkButtonDanger,
  text: stylesButton.textButtonDanger,
  "textDark": stylesButton.textDarkButtonDanger
}

export interface ButtonProps {
  type?: "primary" | "secondary" | "link" | "text" | "textDark";
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  danger?: boolean;
}

export const Button = ({size = "default", type = "primary", danger, ...otherProps}: ButtonProps) => {

  return (
    <ConfigProvider>
      <AntdButton
        className={`${!!danger ? BUTTON_DANGER_CLASSNAME_MAP[type] : BUTTON_CLASSNAME_MAP[type]} ${size===BUTTON_SIZE_MAP.large ? stylesButton.large :  stylesButton.small}` }
        size={BUTTON_SIZE_MAP[size]}
        type={BUTTON_TYPE[type]}
        danger={danger}
        {...otherProps}
      />
    </ConfigProvider>
  );
};

export default Button;
