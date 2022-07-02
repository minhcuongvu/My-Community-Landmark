import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Footer from './Footer';
import NavMenu from './NavMenu';

export default function Layout({ children }) {
  return (
    <div>
      <NavMenu />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
