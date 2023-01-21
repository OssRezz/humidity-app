import { useParams } from "react-router-dom";
import { Card, Col, Row, Image, Button, Container } from "react-bootstrap";
import { Moisture } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import TheMap from "../Components/Map";

const Humidity = () => {
  const { city } = useParams();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const FetchCityById = async () => {
      const requestOptions = {
        method: "GET",
      };
      await fetch(
        `https://www.galaxiaseguridadltda.com.co/humidity/public/api/cities/${city}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setCities(data.data);
        })
        .catch((error) => console.log("error", error));
    };

    FetchCityById();
  }, []);

  return (
    <Container>
      {cities.map((cit) => (
        <Row key={`${cit.id}`}>
          <Col className="col-12 my-5">
            <h1>{cit.name}</h1>
          </Col>
          <Col className="col-12 ">
            <Row>
              <Col className="col-12 col-lg-6 mb-5 mb-lg-0">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Row className="d-flex align-items-center">
                      <Col className="col-12 col-lg-6 text-center">
                        <Image
                          src={`https://www.galaxiaseguridadltda.com.co/humidity/public/images/icons-open-weater/${cit.weather[0].icon}.png`}
                          height="73px"
                          alt="Image - 3"
                        ></Image>
                      </Col>
                      <Col className="col-12 col-lg-6 text-center fs-3">
                        {cit.weather[0].description}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-12 col-lg-6">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Row className="d-flex align-items-center">
                      <Col className="col-12 col-lg-6 text-center">
                        <Moisture className="fs-1 text-primary" />
                      </Col>
                      <Col className="col-12 col-lg-6 text-center fs-4 ">
                        <Row>
                          <Col className="col-12">
                            {cit.main.humidity} <b>%</b>
                          </Col>
                          <Col className="col-12">Humedad</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            className="col-12 p-1  my-5 shadow-lg rounded"
            style={{ height: "50vh", width: "100%" }}
          >
            <TheMap
              center={[cit.coord.lat, cit.coord.lon]}
              text={`Humedad en ${cit.name} de ${cit.main.humidity}%`}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Humidity;
