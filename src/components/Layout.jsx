import { Card, Col, Container, Row } from "react-bootstrap";
import { FaTemperatureHigh, FaTemperatureLow, FaWind } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
const Layout = (props) => {
  return (
    <div style={{ backgroundColor: "#CBD18F" }} className="pt-3">
      <Container fluid="md">
        <h2 className="text-start mb-3 display-2 text-center fw-bold mt-3">
          {props.city}, {props.country}
        </h2>
        <h1 className="mb-2 display-2">Meteo di oggi</h1>
        <Row xs={1} md={2} className="gy-4">
          <Col>
            <div className="rounded-3 p-5  mt-5 shadow-lg" style={{ backgroundColor: "#3A6B35" }}>
              <h2 style={{ color: "#CBD18F" }}>Min - Max</h2>
              <h2 style={{ color: "#CBD18F" }}>
                <FaTemperatureLow />
                {parseInt(props.min - 275.15)}° / <FaTemperatureHigh /> {parseInt(props.max)}°
              </h2>
            </div>
          </Col>
          <Col>
            <div className=" rounded-3 p-5  mt-md-5 shadow-lg" style={{ backgroundColor: "#3A6B35" }}>
              <h2 style={{ color: "#CBD18F" }}>Percepita:</h2>
              <h2 style={{ color: "#CBD18F" }}>
                {parseInt(props.felt)}° <FaTemperatureHigh />{" "}
              </h2>
            </div>
          </Col>
          <Col>
            <div className="rounded-3 p-5  shadow-lg" style={{ backgroundColor: "#3A6B35" }}>
              <h2 style={{ color: "#CBD18F" }}>Vento (kts)</h2>
              <h2 style={{ color: "#CBD18F" }}>
                {props.wind} <FaWind />
              </h2>
            </div>
          </Col>
          <Col>
            <div className=" rounded-3 p-5 mb-5 shadow-lg" style={{ backgroundColor: "#3A6B35" }}>
              <h2 style={{ color: "#CBD18F" }}>Umidità (%)</h2>
              <h2 style={{ color: "#CBD18F" }}>
                {parseInt(props.humidity)} <FaDroplet />
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <h1>Domani: </h1>
          <Col xs={12}>
            {props.arr.map((weath, index) => (
              <Card
                key={index}
                className="rounded-6 shadow-lg mb-5"
                style={{ minHeight: "15rem", backgroundColor: "#3A6B35" }}
              >
                <Card.Body>
                  <Card.Title className="mt-5 fs-1" style={{ color: "#CBD18F" }}>
                    Temperatura: {parseInt(weath.main.temp_min - 275.15)}°/ {parseInt(weath.main.temp_max - 275.15)}°
                  </Card.Title>
                  <Card.Title className="fs-2" style={{ color: "#CBD18F" }}>
                    Vento: {weath.wind.speed}kts / Percepita: {parseInt(weath.main.feels_like - 275.15)}°
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
