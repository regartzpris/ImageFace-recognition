import React from 'react';
import Particles from 'react-particles-js';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank'



// import FaceRecognition from './components/FaceRecognition'

import './App.css';


const particles = { //parctiles for background
  articles: {
    number: {
      value: 104,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particles} />

      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />

      {/* <FaceRecognition /> */}


    </div>
  );
}

export default App;
