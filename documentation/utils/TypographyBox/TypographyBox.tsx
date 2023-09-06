import React from "react";
import styles from "./typographyBox.module.scss";

interface TypographyBox {
  text: React.ReactNode;
  fontFamily: React.ReactNode;
}

const TypographyBox = ({ text, fontFamily }: TypographyBox) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      <div className={styles.fontFamily}>
        <hr />
        {fontFamily}
      </div>
    </div>
  );
};

export default TypographyBox;
