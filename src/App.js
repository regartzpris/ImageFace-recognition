import React from 'react';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';



// import FaceRecognition from './components/FaceRecognition'

import './App.css';

function App() {
  return (
    <div className="App">

      <Navigation />
      <Logo />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}

      
    </div>
  );
}

export default App;
