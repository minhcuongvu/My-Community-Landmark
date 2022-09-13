import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import './custom.scss';

export default function App() {
  return (
    <Layout>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="author" content="Cuong Minh Vu" />
        <meta
          name="description"
          content="My Community Directory is the one place people go to find community services and events so they can understand what's happening in their local community."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>
          My Community Landmark — View community notes around you and add your
          own!
        </title>
      </Helmet>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={route} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
  );
}
