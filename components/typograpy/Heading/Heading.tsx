import {ReactElement} from "react";
import {theme, Typography} from "antd";

interface HeadingProps {
  children?: ReactElement | string;
  as?: ReactElement;
  size?: "extra-large" | "large" | "medium" | "small" | "extra-small"
}

const HEADING_SIZES = {
  "extra-large": "fontSizeHeading-extraLarge",
  large: "fontSizeHeading-large",
  medium: "fontSizeHeading-medium",
  small: "fontSizeHeading-small",
  "extra-small": "fontSizeHeading-extraSmall"
}

const HEADING_LINE_HEIGHT = {
  "extra-large": "lineHeightHeading-extraLarge",
  large: "lineHeightHeading-large",
  medium: "lineHeightHeading-medium",
  small: "lineHeightHeading-small",
  "extra-small": "lineHeightHeading-extraSmall"
}

export const Heading = ({children, as: Component = Typography.Title, size = "extra-large", lineHeight = "extra-large", ...otherProps}: HeadingProps) => {
  const {token} = theme.useToken();

  const styles = {
    fontSize: token[HEADING_SIZES[size]],
    lineHeight:  token[HEADING_LINE_HEIGHT[lineHeight]],
  }
  return <Component style={styles} {...otherProps}>{children}</Component>
}
