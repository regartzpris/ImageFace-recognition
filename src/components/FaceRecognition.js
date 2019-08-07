import  React from 'react';

import '../css/facerecognation.css'


const FaceRecognition = ({ imageUrl}) => {
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage'  src={imageUrl} width='500px' heigh='auto'/>
         
        </div>
      </div>
    );
  }


export default FaceRecognition;