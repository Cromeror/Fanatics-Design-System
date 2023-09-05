import React from "react";
import { Col, Row } from "antd";
import RectangleShadow from "./RectangleShadow";

const shadowVariations = [
  { title: "Evaluation Low", shadowType: "evaluationLow", hexCode: "#0000000a", opacity: 0.08 },
  { title: "Evaluation Middle", shadowType: "evaluationMiddle", hexCode: "#0000000a", opacity: 0.04 },
  { title: "Evaluation High", shadowType: "evaluationHigh", hexCode: "#00000014", opacity: 0.08 },
  { title: "Focus Primary", shadowType: "focusPrimary", hexCode: "#e6f4ff", opacity: 0 },
  { title: "Focus Error", shadowType: "focusError", hexCode: "#fff1f0", opacity: 0 },
  { title: "Focus Warning", shadowType: "focusWarning", hexCode: "#fffbe6", opacity: 0 },
];

export const ShadowGrid = () => {
  return (
    <Row gutter={[16, 16]}>
      {shadowVariations.map((variation, index) => ( // Cambié los corchetes a paréntesis
        <Col span={4} key={index}>
          <RectangleShadow
            title={variation.title}
            hexCode={variation.hexCode}
            shadowType={variation.shadowType}
            opacity={variation.opacity}
          />
        </Col>
      ))}
    </Row>
  );
};
