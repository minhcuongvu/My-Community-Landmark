import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

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
        {data.map((key, i) => (
          <tr key={`${key.username}_${Date.now()}`}>
            <td>{key.username}</td>
            <td>{key.location}</td>
            <td>{key.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function FetchData(props, ref) {
  // static displayName = FetchData.name;
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const populateWeatherData = async () => {
    const response = await fetch('https://mapnoteapp.azurewebsites.net/data');
    const data = await response.json();
    setForecasts(data);
    setLoading(false);
    forecasts.map((forecast) => console.log(forecast));
  };

  useImperativeHandle(ref, () => ({
    populateWeatherData,
  }));

  useEffect(() => {
    populateWeatherData();
  }, []);

  return (
    <div>
      <h1 id="tabelLabel">Community Notes</h1>
      <p>People are writing notes about their location.</p>
      {loading ? (
        <p>
          <em>Loading...</em>
        </p>
      ) : (
        <ForecastsTable data={forecasts} />
      )}
    </div>
  );
}

export default forwardRef(FetchData);
