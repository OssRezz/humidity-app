import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

const Home = () => {
  const [cities, setCities] = useState([]);

  const FetchCities = async () => {
    const requestOptions = {
      method: "GET",
    };
    await fetch(
      `https://www.galaxiaseguridadltda.com.co/humidity/public/api/cities`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setCities(data.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    FetchCities();
  }, []);

  return (
    <Row className="d-flex justify-content-center my-5">
      {cities.map((ciudad) => (
        <Col className="col-12 col-lg-4 mb-5" key={`${ciudad.id}`}>
          <Row>
            <Col className="col-12 mb-2  d-flex justify-content-center">
              <Image
                src={`https://www.galaxiaseguridadltda.com.co/humidity/public/images/${ciudad.img}`}
                className="rounded shadow-lg border"
                height="200"
                width={"100%"}
                alt="Image - 3"
              />
            </Col>
            <Col className="col-12 d-flex justify-content-center">
              <Link
                className="btn btn-secondary"
                key={`${ciudad.id}`}
                to={`/humidity/${ciudad.id}`}
              >
                Ver la humedad en {ciudad.name}
                {"  "}
                <ArrowRightCircle />
              </Link>
            </Col>
            <Col className="col-12 d-flex justify-content-center">
              <small>
                {" "}
                Vistas: <b className="mx-1">{ciudad.views}</b>
              </small>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default Home;
