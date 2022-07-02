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
  map.setView(center, map.getZoom());
  return null;
}

export default function LandmarkApp() {
  const [username, setUsername] = useState('');
  const [note, setNote] = useState('');
  const [initialPosition, setInitialPosition] = useState([51.505, -0.09]);
  const GetCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  };

  const SubmitNote = () => {
    if (!username || !note) {
      alert('Please enter a username and note');
      return;
    }
    console.log(username);
    console.log(note);
  };

  const Refresh = () => {
    setUsername('');
    setNote('');
  };

  useEffect(() => {}, []);

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
            <button className="btn btn-primary" onClick={SubmitNote}>
              Submit a note
            </button>
            <button className="btn btn-primary" onClick={Refresh}>
              Refresh map
            </button>
          </div>
          <div className="Control">
            <form className="form" action="/">
              <label className="form__input" htmlFor="fname">
                <span
                  className="text__desc"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  Write a note at your location!
                </span>
                <input
                  type="text"
                  id="name"
                  name="username"
                  placeholder="Your name.."
                  style={{ width: '100%' }}
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <input
                  type="text"
                  id="note"
                  name="note"
                  placeholder="Your note.."
                  style={{ width: '100%' }}
                  onChange={(e) => setNote(e.target.value)}
                  value={note}
                />
              </label>
            </form>
            <div className="NoteList__wrapper">
              <p className="lorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur consectetur, nisi
                velit euismod nisi, vel consectetur nisi nisi velit euismod
                nisi.
              </p>
              <p className="lorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur consectetur, nisi
                velit euismod nisi, vel consectetur nisi nisi velit euismod
                nisi.
              </p>
              <p className="lorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur consectetur, nisi
                velit euismod nisi, vel consectetur nisi nisi velit euismod
                nisi.
              </p>
              <p className="lorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur consectetur, nisi
                velit euismod nisi, vel consectetur nisi nisi velit euismod
                nisi.
              </p>
              <p className="lorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur consectetur, nisi
                velit euismod nisi, vel consectetur nisi nisi velit euismod
                nisi.
              </p>
              <p className="lorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur consectetur, nisi
                velit euismod nisi, vel consectetur nisi nisi velit euismod
                nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
