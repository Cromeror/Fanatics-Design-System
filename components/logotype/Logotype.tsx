import logoTypePrimary from "./primary.svg";
import logoTypeReversed from "./reversed.svg";

interface LogotypeProps {
  type?: "primary" | "reversed"
}

export const Logotype = ({type = "primary"}: LogotypeProps) => (
  <img src={type === "primary" ? logoTypePrimary : logoTypeReversed} alt="fanatic"/>
)
