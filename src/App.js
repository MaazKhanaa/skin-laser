import React from 'react';
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
