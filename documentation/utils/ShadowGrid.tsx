import React from "react";
import { Col, Row } from "antd";
import RectangleShadow from "./RectangleShadow";

const shadowVariations = [
  {
    title: "Evaluation Low",
    shadowType: "evaluationLow",
    hexCode: "#0000000a",
    opacity: 0.08,
    x: 0,
    y: 0,
    blur: 4,
    spread: 0,
  },
  {
    title: "Evaluation Middle",
    shadowType: "evaluationMiddle",
    hexCode: "#0000000a",
    opacity: 0.04,
    x: 0,
    y: 0,
    blur: 8,
    spread: 0,
  },
  {
    title: "Evaluation High",
    shadowType: "evaluationHigh",
    hexCode: "#00000014",
    opacity: 0.08,
    x: 0,
    y: 0,
    blur: 16,
    spread: 0,
  },
  {
    title: "Focus Primary",
    shadowType: "focusPrimary",
    hexCode: "#e6f4ff",
    opacity: 0,
    x: 0,
    y: 0,
    blur: 0,
    spread: 2,
  },
  {
    title: "Focus Error",
    shadowType: "focusError",
    hexCode: "#fff1f0",
    opacity: 0,
    x: 0,
    y: 0,
    blur: 0,
    spread: 2,
  },
  {
    title: "Focus Warning",
    shadowType: "focusWarning",
    hexCode: "#fffbe6",
    opacity: 0,
    x: 0,
    y: 0,
    blur: 0,
    spread: 2,
  },
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
            x={variation.x}
            y={variation.y}
            blur={variation.blur}
            spread={variation.spread}
          />
        </Col>
      ))}
    </Row>
  );
};
