import React, { Component } from 'react';

export default class FetchData extends Component {
  // static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  async populateWeatherData() {
    let response;
    const rndInt = Math.floor(Math.random() * 6) + 1;
    if (rndInt % 2 === 0) {
      response = await fetch('https://mapnoteapp.azurewebsites.net/weatherforecast');
    } else {
      response = await fetch('weatherforecast');
    }
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }

  render() {
    const { forecasts, loading } = this.state;
    const contents = loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(forecasts);

    return (
      <div>
        <h1 id="tabelLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
