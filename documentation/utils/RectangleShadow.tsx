import styles from "./Rectangle.module.scss";
import { Col, Row } from 'antd';
import { BodyText } from "../../components/atoms/typography/BodyText";
import classNames from "classnames";



export const RectangleShadow = ({ title, hexCode, opacity, shadowType, x, y, blur, spread }) => {

  const SHADOW_STYLE_MAP = {
    evaluationLow: styles.rectangleShadow_evaluationLow,
    evaluationMiddle: styles.rectangleShadow_evaluationMiddle,
    evaluationHigh: styles.rectangleShadow_evaluationHigh,
    focusPrimary: styles.rectangleShadow_focusPrimary,
    focusError: styles.rectangleShadow_focusError,
    focusWarning: styles.rectangleShadow_focusWarning,
  };


  const rectangleStyle = {
    backgroundColor: "white",
    boxShadow: SHADOW_STYLE_MAP[shadowType],

  };

  return (

    <Row gutter={[0, 4]}>
      <div className={classNames(
        styles.rectangleShadow,
        SHADOW_STYLE_MAP[shadowType]
      )}
        style={rectangleStyle} />
      <Col span={24}>
        <BodyText>{title}</BodyText>
      </Col>
      <Col span={24}>
        <BodyText>{hexCode} {opacity && `Opacity=${opacity}`}</BodyText>
      </Col>
      <Col span={24}>
        <BodyText>x={x} y={y}</BodyText>
      </Col>
      <Col span={24}>
        <BodyText>blur={blur} spread={spread}</BodyText>
      </Col>
    </Row>
  );
};

export default RectangleShadow;
