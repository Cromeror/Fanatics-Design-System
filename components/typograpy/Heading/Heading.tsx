import {ReactElement} from "react";
import {theme, Typography} from "antd";

interface HeadingProps {
  children?: ReactElement | string;
  as?: ReactElement;
  size?: "extra-large" | "large" | "medium" | "small" | "extra-small"
}

const HEADING_SIZES = {
  "extra-large": "fontSizeHeading-ExtraLarge",
  large: "fontSizeHeading-ExtraLarge",
  medium: "fontSizeHeading-ExtraLarge"
}

export const Heading = ({children, as: Component = Typography.Title, size = "medium", ...otherProps}: HeadingProps) => {
  const {token} = theme.useToken();

  const styles = {
    fontSize: token[HEADING_SIZES[size]]
  }

  return <Component style={styles} {...otherProps}>{children}</Component>
}
