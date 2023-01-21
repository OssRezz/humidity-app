import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Badge } from "react-bootstrap";

function TheMap(props) {
  const [cordinates, setCordinates] = useState([10, 10]);
  const MyCustomMarker = ({ text }) => <Badge className="fs-6">{text}</Badge>;

  useEffect(() => {
    setCordinates(props.center);
  }, [props.center]);

  return (
    <GoogleMapReact
      key={cordinates[0] + cordinates[1]}
      yesIWantToUseGoogleMapApiInternals={true}
      bootstrapURLKeys={{ key: "AIzaSyBkZ_dKoHLDM-a9pKoPi3Fop7iyTVlR0ng" }}
      defaultZoom={9}
      center={cordinates}
    >
      <MyCustomMarker
        lat={cordinates[0]}
        lng={cordinates[1]}
        text={props.text}
      />
    </GoogleMapReact>
  );
}

export default TheMap;
