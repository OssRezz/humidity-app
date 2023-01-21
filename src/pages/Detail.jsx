import { useParams } from "react-router-dom";
import { Card, Col, Row, Image, Container } from "react-bootstrap";
import { Moisture } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import TheMap from "../Components/Map.jsx";

const Details = () => {
  const { history } = useParams();
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const FetchHistoryById = async () => {
      const requestOptions = {
        method: "GET",
      };
      await fetch(
        `https://www.galaxiaseguridadltda.com.co/humidity/public/api/history/${history}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setHistoryData(data.data);
        })
        .catch((error) => console.log("error", error));
    };
    FetchHistoryById();
  }, []);

  return (
    <Container>
      {historyData.map((data) => (
        <Row key={`${data.id}`}>
          <Col className="col-12 my-5">
            <h1>{data.city.name}</h1>
          </Col>
          <Col className="col-12 ">
            <Row>
              <Col className="col-12 col-lg-6 mb-5 mb-lg-0">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Row className="d-flex align-items-center">
                      <Col className="col-12 col-lg-6 text-center">
                        <Image
                          src={`https://www.galaxiaseguridadltda.com.co/humidity/public/images/icons-open-weater/${data.icon}.png`}
                          height="73px"
                        ></Image>
                      </Col>
                      <Col className="col-12 col-lg-6 text-center fs-3">
                        {data.description}
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
                            {data.humidity} <b>%</b>
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
              center={[parseFloat(data.city.lat), parseFloat(data.city.long)]}
              text={`Humedad en ${data.city.name} de ${data.humidity}%`}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Details;
