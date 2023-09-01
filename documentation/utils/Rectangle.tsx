import PropTypes from "prop-types";
import styles from "./Rectangle.module.scss";

export const Rectangle = ({ backgroundColor }) => {
  const rectangleStyle = {
    backgroundColor: backgroundColor,
  };

  return <div className={styles.rectangle} style={rectangleStyle}></div>;
};

Rectangle.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default Rectangle;
