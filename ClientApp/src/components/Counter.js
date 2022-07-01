import React, { useState, useEffect } from 'react';
import {
  MapContainer, TileLayer, Popup, Marker, useMap, useMapEvent,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

function CenterView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

export default function Counter() {
  const [currentCount, setCurrentCount] = useState(0);
  const [initialPosition, setInitialPosition] = useState([0, 0]);

  // const incrementCounter = () => {
  //   setCurrentCount(currentCount + 1);
  // };

  // const doSomething = () => {
  //   console.log('doSomething');
  // };

  const ChangePosition = () => {
    setInitialPosition([initialPosition[0] + 1, initialPosition[1] + 1]);
  };

  const GetCurrentPosition = () => {
    console.log('inside useEffect');
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  };

  useEffect(() => {
    console.log(initialPosition);
  }, [initialPosition]);

  return (
    <div>
      <div>
        <h1>Counter</h1>
        <p>This is a simple example of a React component.</p>
        <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>
      </div>

      <br />

      <div className="MapMenu">
        <MapContainer
          className="Map"
          center={initialPosition}
          style={{ height: '100vh', width: '50%' }}
          zoom={13}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={initialPosition}
          >
            <Popup>You are here</Popup>
          </Marker>
          <CenterView center={initialPosition} />
        </MapContainer>
        <div className="Menu">
          <div className="Panel">Panel</div>
          <button className="btn btn-primary" onClick={GetCurrentPosition}>Get My Location</button>
          <button className="btn btn-primary" onClick={ChangePosition}>Change My Location</button>
          <div className="Display">{currentCount}</div>
        </div>
      </div>
    </div>
  );
}
