import {Button as AntdButton, ConfigProvider} from "antd";
import {Color} from '../../themes/color'
import stylesButton from "./button.module.scss"

export const buttonTheme = {
  token: {
    //primary
    //colorPrimaryActive: "yellow",//color.colorPrimaryActive,
    colorBgContainerDisabled: "rgba(37, 41, 47, 0.04)", //le puse ese que es el que esta en el figma pero no esta correcto parece
    colorPrimaryHover: Color.colorInfoHover,
    colorPrimaryTextHover: "red",
    //
    colorSecondary: Color.colorBgContainer,
    colorTextButton: "transparent",
    colorLink: "transparent", // color.colorPrimary, Me di cuenta que en el figma tiene una propiedad color primary pero al ponerle tipo link se queda blanco asi que no cre que se refiera al background

    //Hover
    colorSecondaryHover: Color.colorBgContainer, //cambia es el color del Texto
    colorTextHover: "red", // Este no esta especificado correctamente
    colorLinkHover: Color.colorInfoHover, // cambia el color del texto

    //Active
    colorSecondaryActive: Color.colorBgContainer,
    colorTextActive: "transparent",
    colorLinkActive: "transparent", // le puse transparente pero no esta especificado

    //DisabledcolorSecondaryDisabled: "var(--backgrounds-color-bg-container-disabled, rgba(37, 41, 47, 0.04))",
    colorTextDisable: "transparent", //le puse transparente pero no esta especificado
    colorLinkDisable: "transparent", // vuelve y juega lo mismo
  }
}

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
  "text-dark": stylesButton.textDarkButton
}

export interface ButtonProps {
  type?: "primary" | "secondary" | "link" | "text" | "text-dark";
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  danger?: boolean;
}

export const Button = ({size = "default", type = "primary", danger, ...otherProps}: ButtonProps) => {
  return (
    <ConfigProvider theme={buttonTheme}>
      <AntdButton
        className={!!danger ? stylesButton.primaryButtonDanger : BUTTON_CLASSNAME_MAP[type]}
        size={BUTTON_SIZE_MAP[size]}
        type={BUTTON_TYPE[type]}
        danger={danger}
        {...otherProps}
      />
    </ConfigProvider>
  );
};

export default Button;
