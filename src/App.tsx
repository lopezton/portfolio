import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/fonts.css'
import './styles/agency.css';
import './App.css';

import { Footer } from './layout/Footer';
import { TopNav } from './layout/TopNav';
import { Header } from './layout/Header';
import { SectionContainer } from './layout/SectionContainer';

function App() {
  return (
    <>
      <TopNav></TopNav>
      <Header></Header>
      <SectionContainer></SectionContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
