import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Banner from './Banner';
import Footer from './Footer';
import NavMenu from './NavMenu';
import Testimonials from './Testimonials';

export default function Layout({ children }) {
  return (
    <div>
      <NavMenu />
      <Banner />
      <Container>{children}</Container>
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  );
}
