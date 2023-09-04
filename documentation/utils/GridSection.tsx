import {Col, Row} from "antd";
import Rectangle from "./Rectangle";

export const GridSection = ({colors = []}) => {
  return (
    <Row gutter={[16, 16]}>
      {colors.map(([name, value]) => (
        <Col span={4} key={name}>
          <Rectangle backgroundColor={value} title={name} hexCode={value}/>
        </Col>
      ))}
    </Row>
  )
}
