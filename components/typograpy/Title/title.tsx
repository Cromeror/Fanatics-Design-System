import {ReactElement} from "react";
import {theme, Typography} from "antd";

interface TitleProps {
  children?: ReactElement | string;
  as?: ReactElement;
  size?: "large" | "medium" | "small",
  lineHeight?: "large" | "medium" | "small",
}

const TITLE_SIZES = {
  large: "fontSizeTitle-large",
  medium: "fontSizeTitle-medium",
  small: "fontSizeTitle-small"
}

const TITLE_LINE_HEIGHT = {
  large: "lineHeightTitle-large",
  medium: "lineHeightTitle-medium",
  small: "lineHeightTitle-small"
}

export const Title = ({children, as: Component = Typography.Text, size = "large", lineHeight = "large", ...otherProps}: TitleProps) => {
  const {token} = theme.useToken();

  const styles = {
    fontSize: token[TITLE_SIZES[size]],
    lineHeight: token[TITLE_LINE_HEIGHT[lineHeight]],
  }
  return <Component style={styles} {...otherProps}>{children}</Component>
}
