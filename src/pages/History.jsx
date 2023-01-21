import { Col, Row, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";

const History = () => {
  const [History, setHistory] = useState([]);

  useEffect(() => {
    const FetchCities = async () => {
      const requestOptions = {
        method: "GET",
      };
      await fetch(
        `https://www.galaxiaseguridadltda.com.co/humidity/public/api/history`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setHistory(data.data);
        })
        .catch((error) => console.log("error", error));
    };

    FetchCities();
  }, []);

  const FormatDate = (date) => {
    const Fecha = new Date(date);
    return Fecha.toLocaleDateString("es-CO", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <Row>
      <Col className="col-12 my-5">
        <Card className="shadow-sm">
          <Card.Header>
            <b>Historial de consultas de humedad</b>
          </Card.Header>
          <Card.Body>
            <Table bordered hover className="mb-0" size="sm" responsive>
              <thead className="bg-white">
                <tr>
                  <th>#</th>
                  <th className="text-center">Fecha</th>
                  <th>Ciudad</th>
                  <th>Clima</th>
                  <th className="text-center">Humedad</th>
                  <th className="text-center">Detalles</th>
                </tr>
              </thead>
              <tbody>
                {History.map((history) => (
                  <tr key={`${history.id}`}>
                    <td>{`${history.id}`}</td>
                    <td className="text-center">{`${FormatDate(
                      history.created_at
                    )}`}</td>
                    <td>{`${history.city.name}`}</td>
                    <td>{`${history.description}`}</td>
                    <td className="text-center">{`${history.humidity}%`}</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-link btm-sm"
                        key={`${history.id}`}
                        to={`/detail/${history.id}`}
                        title={"Detalle"}
                      >
                        Detalle <ArrowRightCircle />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default History;
