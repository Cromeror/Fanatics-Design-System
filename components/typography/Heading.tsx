import {ReactElement} from "react";
import {theme, Typography} from "antd";

interface HeadingProps {
  children?: ReactElement | string;
  size?: "extra-large" | "large" | "medium" | "small" | "extra-small"
}

export const HEADING_SIZES = {
  "extra-large": "fontSizeHeading-extraLarge",
  large: "fontSizeHeading-large",
  medium: "fontSizeHeading-medium",
  small: "fontSizeHeading-small",
  "extra-small": "fontSizeHeading-extraSmall"
}

export const HEADING_LINE_HEIGHT = {
  "extra-large": "lineHeightHeading-extraLarge",
  large: "lineHeightHeading-large",
  medium: "lineHeightHeading-medium",
  small: "lineHeightHeading-small",
  "extra-small": "lineHeightHeading-extraSmall"
}

export const LEVEL_TYPOGRAPHY = {
  "extra-large": 1,
  large: 2,
  medium: 3,
  small: 4,
  "extra-small": 5
}

export const Heading = ({children, size = "medium"}: HeadingProps) => {
  const {token} = theme.useToken();

  const styles = {
    fontSize: token[HEADING_SIZES[size]],
    lineHeight: token[HEADING_LINE_HEIGHT[size]],
    margin: 0
  }
  return <Typography.Title style={styles} level={LEVEL_TYPOGRAPHY[size]}>{children}</Typography.Title>
}
