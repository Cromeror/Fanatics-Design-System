import { Button as AntdButton, ButtonProps as AntdButtonProps, ConfigProvider, theme } from "antd";
import {color} from '../../themes/color'

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

export const buttonTheme = {
  token: {
    colorSecondary: color.colorBgContainer,
    colorTextButton: "transparent",
    colorLink:  "transparent", // color.colorPrimary, Me di cuenta que en el figma tiene una propiedad color primary pero al ponerle tipo link se queda blanco asi que no cre que se refiera al background

    //Hover
    colorPrimaryHover: color.colorInfoHover,
    colorSecondaryHover: color.colorBgContainer, //cambia es el color del Texto
    colorTextHover: "var(--text-color-bg-text-hover, rgba(37, 41, 47, 0.06));", // Este no esta especificado correctamente
    colorLinkHover: color.colorInfoHover, // cambia el color del texto

    //Active
    colorPrimaryActive: color.colorPrimaryActive,
    colorSecondaryActive: color.colorBgContainer,
    colorTextActive: "transparent",
    colorLinkActive: "transparent", // le puse transparente pero no esta especificado

    //Disabled
    colorPrimaryDisavle: "rgba(37, 41, 47, 0.04)", //le puse ese que es el que esta en el figma pero no esta correcto parece
    colorSecondaryDisabled: "var(--backgrounds-color-bg-container-disabled, rgba(37, 41, 47, 0.04))",
    colorTextDisable: "transparent", //le puse transparente pero no esta especificado
    colorLinkDisable: "transparent", // vuelve y juega lo mismo


  }
}

const borders = {
  SecondaryBorderDefault: "1px solid var(--primary-color-primary-active, #0C4BA3)",
  borderTextDefault: "transparent",
  borderLinkDefault: "transparent",

  //Hover
  SecondarytBorderHover: "1px solid var(--border-color-border, rgba(37, 41, 47, 0.16))",
  borderTextHover: "transparent",
  borderLinkHover: "transparent",

  //Active
  SecondarytBorderActive: "1px solid var(--primary-color-primary-active, #0C4BA3)",
  borderTextActive: "transparent",
  borderLinkActive: "transparent",

  //Focused
  PrimarytBorderFocused: "3px solid var(--primary-color-primary-active, #0C4BA3)",
  SecondarytBorderFocused: "2px solid var(--primary-color-primary-base, #0F5ECC)",
  borderTextFocused: "2px solid var(--text-color-text, rgba(37, 41, 47, 0.88))",
  borderLinkFocused: "2px solid var(--primary-color-primary-base, #0F5ECC)",

  //Disabled
  PrimarytBorderDisabled: "1px solid var(--border-color-border, rgba(37, 41, 47, 0.16))",
  SecondarytBorderDisabled: "1px solid var(--border-color-border, rgba(37, 41, 47, 0.16))",
  borderTextDisabled: "transparent",
  borderLinkDisabled: "transparent",

}

export const Button = ({
  children,
  size = "large",
  color = null,
  type = BUTTON_TYPE["text"],
}: ButtonProps) => {
  const { token } = theme.useToken();

  const styles = {
    //backgroundColor: isHovered && hoverColor ? token[BUTTON_BG_COLOR[hoverColor]] : token[BUTTON_BG_COLOR[color]],
    color: token[BUTTON_TYPE[color]],
  };
  return (
    <ConfigProvider theme={buttonTheme}>
      <AntdButton
        style={styles}
        size={BUTTON_SIZE[size]}
        type={BUTTON_TYPE[type]}
        disabled={false}
        >
    {children}
      </AntdButton>
    </ConfigProvider>
  );
};

export default Button;
