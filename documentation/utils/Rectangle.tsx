import styles from "./Rectangle.module.scss";
import {Col, Row} from 'antd';
import {BodyText} from "../../components/atoms/typography/BodyText";

export const Rectangle = ({backgroundColor, title, hexCode}) => {
  const rectangleStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <Row gutter={[0, 4]}>
      <div className={styles.rectangle} style={rectangleStyle}/>
      <Col span={24}>
        <BodyText>{title}</BodyText>
      </Col>
      <BodyText>{hexCode}</BodyText>
    </Row>);
};

export default Rectangle;
