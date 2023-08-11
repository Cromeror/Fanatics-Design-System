import {ReactElement} from "react";
import {theme, Typography} from "antd";
import {LEVEL_TYPOGRAPHY} from "./Heading";

interface TitleProps {
  children?: ReactElement | string;
  as?: ReactElement;
  size?: "large" | "medium" | "small",
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

export const Title = ({children, as: Component = Typography.Title, size = "medium", ...otherProps}: TitleProps) => {
  const {token} = theme.useToken();

  const styles = {
    fontSize: token[TITLE_SIZES[size]],
    lineHeight: token[TITLE_LINE_HEIGHT[size]],
    margin: 0
  }
  return <Component style={styles} level={LEVEL_TYPOGRAPHY[size]} {...otherProps}>{children}</Component>
}
