import {ReactElement} from "react";
import {theme, Typography} from "antd";

interface BodyTextProps {
  children?: ReactElement | string;
  as?: ReactElement;
  size?: "extra-large" | "large" | "base" | "small" | "extra-small"
  lineHeight?: "extra-large" | "large" | "base" | "small" | "extra-small"
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  italic?: boolean;
}

const BODY_TEXT_SIZES = {
  "extra-large": "fontSizeBodyText-extraLarge",
  large: "fontSizeBodyText-large",
  base: "fontSizeBodyText-medium",
  small: "fontSizeBodyText-small",
  "extra-small": "fontSizeBodyText-extraSmall"
}

const BODY_TEXT_LINE_HEIGHT = {
  "extra-large": "lineHeightBodyText-extraLarge",
  large: "lineHeightBodyText-large",
  base: "lineHeightBodyText-medium",
  small: "lineHeightBodyText-small",
  "extra-small": "lineHeightBodyText-extraSmall"
}

export const BodyText = ({children, size = "large", lineHeight = "large", ...otherProps}: BodyTextProps) => {
  const {token} = theme.useToken();

  const styles = {
    fontSize: token[BODY_TEXT_SIZES[size]],
    lineHeight: token[BODY_TEXT_LINE_HEIGHT[lineHeight]],

  }

  return <Typography.Text style={styles} {...otherProps}>{children}</Typography.Text>
}
