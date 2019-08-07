import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';

import './App.css';



//Clarifai Api

const app = new Clarifai.App({
  apiKey: ' '
 });


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


class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl:''
    }

  }


  onInputChange = (link) => {

    // console.log(link.target.value)
    this.setState({input:link.target.value});

  }

  onButtonSubmit = () => {
    // console.log('click');
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      // do something with response
      console.log(response)
    },
    function(err) {
      // there was an error
    }
  );
  }






  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particles} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />

        <FaceRecognition  imageUrl={this.state.imageUrl}/>


      </div>
    );
  }
}
export default App;
