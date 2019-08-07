import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';
import SignIn from './components/SignIn';
import Register from './components/Register';

import './App.css';



//Clarifai Api

const app = new Clarifai.App({
  apiKey: ''
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
      imageUrl: '',
      box: {},
      router: 'login',
      isSignIn: false
    }

  }


  onInputChange = (link) => {

    // console.log(link.target.value)
    this.setState({ input: link.target.value });

  }

  faceDetect = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    //width n height from image
    const width = Number(image.width);
    const height = Number(image.height);

    console.log(width, height);
    //measurement start from top to bottom,from left to right point
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }


  }

  displayFaceBox = (box) => {
    this.setState({ box: box });
    console.log(box);
  }


  onRouteChange = (router) => {
    if (router === 'signout') {
      this.setState({ isSignIn: false })
    } else if (router === 'home') {
      this.setState({ isSignIn: true })
    }

    this.setState({ router: router }); //dynamic
  }

  onButtonSubmit = () => {
    // console.log('click');
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      (response => this.displayFaceBox
        (this.faceDetect(response)) //this face detect take responsponse n return object and displayfacebox
        .catch(err => console.log(err)))

    );
  }






  render() {

    const { isSignIn, imageUrl, router, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particles} />

        <Navigation isSignIn={isSignIn} onRouteChange={this.onRouteChange} />

        {this.state.router === 'home'
          ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
          : (router === 'login'
            ? <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
          )
        }


      </div>
    );
  }
}
export default App;
