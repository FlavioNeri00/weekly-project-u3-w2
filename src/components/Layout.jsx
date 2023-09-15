import { Col, Container, Row } from "react-bootstrap";
import { FaTemperatureHigh, FaTemperatureLow, FaWind } from "react-icons/fa";
import { SiRainmeter } from "react-icons/si";
const Layout = (props) => {
  return (
    <div>
      <Container>
        <h2 className="text-start mb-5">Città - Data</h2>
        <h1 className="mb-5 display-2">Meteo di oggi</h1>
        <Row xs={2}>
          <Col>
            <div className="border border-1 rounded-3 p-5 mb-4 mt-5">
              <h2>
                <FaTemperatureLow /> {props.min}/ <FaTemperatureHigh /> {props.max}
              </h2>
            </div>
          </Col>
          <Col>
            <div className="border border-1 rounded-3 p-5 mb-4 mt-5">
              <h2>
                {props.felt} <FaTemperatureHigh />{" "}
              </h2>
            </div>
          </Col>
          <Col>
            <div className="border border-1 rounded-3 p-5 mb-4">
              <h2>
                {props.wind} <FaWind />
              </h2>
            </div>
          </Col>
          <Col>
            <div className="border border-1 rounded-3 p-5 mb-4">
              <h2>{props.humidity}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
