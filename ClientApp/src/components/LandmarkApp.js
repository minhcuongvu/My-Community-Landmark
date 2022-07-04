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
import uuid from 'react-uuid';

function CenterView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

// Utils
function Round(number) {
  return Math.round(number * 1000) / 1000;
}

function AppMarker({
  position,
  title,
  showBtn,
  clickEvent,
}) {
  return (
    <Marker
      position={position}
    >
      <Popup closeButton={false}>
        {title ? (
          <>
            <span className="marker__title">{title}</span>
            <br />
          </>
        ) : null}
        <button className="marker__btn" onClick={clickEvent}>See notes here!</button>
      </Popup>
    </Marker>
  );
}

function ForecastsTable({ data }) {
  return (
    <table className="table table-striped" aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {data.map((key) => (
          <tr key={`${uuid()}}`}>
            <td>{key.username}</td>
            <td>
              {key.location[0]}/{key.location[1]}
            </td>
            <td>{key.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function NoteList({ data, loading }) {
  return (
    <div>
      <h1 id="tabelLabel">Community Notes</h1>
      <p>People are writing notes about their location.</p>
      {loading ? (
        <p>
          <em>Loading...</em>
        </p>
      ) : (
        <ForecastsTable data={data} />
      )}
    </div>
  );
}

export default function LandmarkApp() {
  const [username, setUsername] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  const [note, setNote] = useState('');
  const [initialPosition, setInitialPosition] = useState([51.5, -0.09]);
  const [currentSelectedPos, setCurrentSelectedPos] = useState(null);

  const [loading, setLoading] = useState(true);

  const populateWeatherData = async () => {
    const response = await fetch('https://mapnoteapp.azurewebsites.net/data');
    setData(await response.json());
    setLoading(false);
  };

  const GetCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  };

  const SubmitNote = async (e) => {
    e.preventDefault();
    if (!username || !note) {
      alert('Please enter a username and note');
      return;
    }
    const noteData = JSON.stringify({
      username,
      location: [Round(initialPosition[0]), Round(initialPosition[1])],
      note,
    });

    const options = {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: noteData,
    };
    fetch('https://mapnoteapp.azurewebsites.net/data', options)
      .then((res) => {
        if (res.status === 200) {
          alert('Your note is submitted! Refresh the page later to see it.');
        } else {
          alert('Some error occured');
        }
      })
      .catch((err) => console.log(err));
  };

  const Search = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDisplay(data.filter((key) => key.username.includes(search) || key.note.includes(search)));
  };

  const Refresh = () => {
    setUsername('');
    setNote('');
    setDisplay(data);
    setInitialPosition([51.5, -0.09]);
    setCurrentSelectedPos(null);
    populateWeatherData();
  };

  const clickEvent = (e, location) => {
    e.preventDefault();
    e.stopPropagation();
    if (location !== null) {
      setDisplay(data.filter((key) => Round(key.location[0]) === Round(location[0]) && Round(key.location[1]) === Round(location[1])));
      setCurrentSelectedPos(location);
    } else {
      alert('No data found');
    }
  };

  useEffect(() => {
    populateWeatherData();
    setDisplay(data);
  }, []);

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
            <AppMarker position={initialPosition} title={'You are here!'} showBtn={1} clickEvent={(e) => clickEvent(e, initialPosition)} />
            {
              data.filter((key) => key.location[0] !== initialPosition[0] && key.location[1] !== initialPosition[1]).map((key) => (
                <AppMarker
                  key={`${uuid()}}`}
                  position={key.location}
                  showBtn={1}
                  clickEvent={(e) => clickEvent(e, [key.location[0], key.location[1]])}
                />
              ))
            }
            <CenterView center={currentSelectedPos || initialPosition} />
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
            <button className="btn btn-primary" onClick={Refresh}>
              Refresh
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
                <button className="btn btn-primary" onClick={SubmitNote}>
                  Submit a note
                </button>
              </label>
            </form>
            <form className="form" action="/">
              <label className="form__input" htmlFor="fname">
                <span
                  className="text__desc"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  Search for something?
                </span>
                <input
                  type="text"
                  id="search"
                  name="searchBox"
                  placeholder="Enter here.. (case sensitive)"
                  style={{ width: '100%' }}
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <button className="btn btn-primary" onClick={(e) => Search(e)}>
                  Search
                </button>
              </label>
            </form>
            <div className="NoteList__wrapper">
              <NoteList data={display} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
