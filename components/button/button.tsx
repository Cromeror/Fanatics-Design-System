import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";

export type ButtonProps = AntdButtonProps;

const Button = (props: ButtonProps) => (
  <AntdButton {...props}>{props.children}</AntdButton>
);

export default Button;
