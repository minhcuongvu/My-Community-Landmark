import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

function CenterView({ center }) {
  const map = useMap();
  map.setView(center, 12);
  return null;
}

export default function Counter() {
  const [currentCount, setCurrentCount] = useState(0);
  const [initialPosition, setInitialPosition] = useState([51.505, -0.09]);

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
    <section className="py-4 bg__color">
      <div className="MapMenu">
        <div className="Map">
          <MapContainer
            className="leaflet__map"
            center={[51.505, -0.09]}
            style={{ height: '100%', width: '100%' }}
            zoom={13}
            scrollWheelZoom
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={initialPosition}>
              <Popup closeButton={false}>You are here!</Popup>
            </Marker>
            <CenterView center={initialPosition} />
          </MapContainer>
        </div>
        <div className="Menu">
          <div className="MenuLabel">
            <span className="MenuLabel__title">My Community Landmark</span>
            <span className="text__desc">
              View community notes around you and add your own!
            </span>
          </div>
          <div className="Panel">
            <button className="btn btn-primary" onClick={GetCurrentPosition}>
              Your location
            </button>
            <button className="btn btn-primary" onClick={ChangePosition}>
              Submit a note
            </button>
          </div>
          <div className="Control">
            <form className="form" action="/">
              <label className="form__input" htmlFor="fname">
                <span style={{ display: 'flex', justifyContent: 'center' }}>
                  Write a note at your location!
                </span>
                <input
                  type="text"
                  id="note"
                  name="usernote"
                  placeholder="Your note.."
                  style={{ width: '100%' }}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
